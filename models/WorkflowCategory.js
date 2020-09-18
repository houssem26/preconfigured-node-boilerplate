const { Model } = require('objection');

class WorkflowCategory extends Model {
  static get tableName() {
    return 'workflow_category';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        logo : { type: 'string' },
        createdAt : { type: 'date' },
        updatedAt : { type: 'date' },
        status: { type: 'integer' },
        parent_category_id: { type: 'integer' },
        }
    }
  }
}

module.exports = WorkflowCategory