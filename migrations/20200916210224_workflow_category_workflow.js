
exports.up = function(knex) {
    return knex.schema.createTable(
        'workflow_category_workflow', function(table) {
            table.increments('id');
            table.integer('workflow_id').unsigned();
            table.integer('workflow_category_id').unsigned();
            table.foreign('workflow_category_id').references('id').inTable('public.workflow_category');;
            table.foreign('workflow_id').references('id').inTable('public.workflow');
          })
    }
  exports.down = function(knex) {
      return knex.schema.dropTable('workflow_category_workflow')  
  };
  