
exports.up = function(knex) {
    console.log('workflow_migration table created')
    return knex.schema.createTable(
        'workflow', function(table) {
            table.increments('id');
            table.string('name');
            table.string('description');
            table.integer('status');
          })
    }
  
  exports.down = function(knex) {
    console.log('workflow_migration table dropped')
      return knex.schema.dropTable('workflow')  
  };
  