const WorkflowCategory = require('../models/WorkflowCategory')
const { raw } = require('objection')
module.exports.readAll = async function(req, res) {
    const categories = await WorkflowCategory
        .query()
        .select()
    return res.send(categories)
}

module.exports.createOne = async function(req, res) {
    const category = {...req.body};
    try {
        const data = await WorkflowCategory
            .query()
            .insert(category)
        return res.send(data)
    } catch (e) {
        res.status(500)
        res.send('internal server error')
    }
}