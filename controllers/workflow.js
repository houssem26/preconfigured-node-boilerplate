const Workflow = require('../models/WorkFlow')

module.exports.createOne = async function(req, res) {
    const {
      categories,
      variants
    } = req.body
    const workflow = {
        ...req.body,
        categories:categories.map(e =>({id:e})),
        variants: variants ? variants.map(e =>({id:e})) : undefined
    };
    await Workflow.transaction(async (trx) => {
    try {
        const result = await Workflow
            .query(trx)
            .insertGraph(workflow, {relate: true, unrelate: true})
            .debug()
        return res.send(result)
    } catch(e) {
        console.error(e);
        res.status(500);
        return res.send('error')
    }
    })
}

module.exports.filter = async function(req, res) {
    const {
        name,
        status,
        categories,
    } = req.query;
    const nameCriteria = name ? `%${name}%` : undefined;
    try {
        const workflows = await Workflow
            .query()
            .skipUndefined()
            .select()
            .leftJoin('workflow_category_workflow', 'workflow_category_workflow.workflow_id','=','workflow.id')
            .where('name', 'like', nameCriteria)
            .where('status', '=', status)
            .whereIn('workflow_category_workflow.workflow_category_id', categories)
        return res.send(workflows)
    } catch(e) {
        console.error(e);
        res.status(500);
        return res.send('error')
    }
}
