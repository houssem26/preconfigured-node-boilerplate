
exports.up = function(knex) {
    return knex.schema.createTable(
        'workflow_workflow', function(table) {
            table.increments('id');
            table.integer('source_id').unsigned();
            table.integer('variant_id').unsigned();
            table.foreign('source_id').references('workflow.id');
            table.foreign('variant_id').references('workflow.id');
          })
    }
  exports.down = function(knex) {
      return knex.schema.dropTable('workflow_workflow')  
  };
  