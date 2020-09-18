const { Model } = require('objection');
const WorkflowCategory = require('./WorkflowCategory');

class Workflow extends Model {
  static get tableName() {
    return 'workflow';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        status: { type: 'integer' },
        }
    }
  }
  static get relationMappings () {
    //   return{
    //   contract: {
    //     relation: Model.BelongsToOneRelation,
    //     modelClass: Contract,
    //     join: {
    //       from: 'collaborator.contract_id',
    //       to: 'contract.id'
    //     }
    //   },
    return {
      categories: {
          relation: Model.ManyToManyRelation,
          modelClass: WorkflowCategory,
          join: {
            from: 'workflow.id',
            through: {
              from: 'workflow_category_workflow.workflow_id',
              to: 'workflow_category_workflow.workflow_category_id'
            },
            to: 'workflow_category.id'
          }
        },
        variants: {
          relation: Model.ManyToManyRelation,
          modelClass: Workflow,
          join: {
            from: 'workflow.id',
            through: {
              from: 'workflow_workflow.source_id',
              to: 'workflow_workflow.variant_id'
            },
            to: 'workflow.id'
          }
        }
    };  
}
}
module.exports = Workflow