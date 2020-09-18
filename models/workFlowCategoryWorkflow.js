const { Model } = require('objection');

class WorkflowWorkflow extends Model {
  static get tableName() {
    return 'workflow_category';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        workflow_id: { type: 'integer' },
        workflow_category_id: { type: 'integer' },
        }
    }
  }
}
module.exports = WorkflowWorkflow