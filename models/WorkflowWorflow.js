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
        source_id: { type: 'integer' },
        variant_id: { type: 'integer' },
        }
    }
  }
}
module.exports = WorkflowWorkflow