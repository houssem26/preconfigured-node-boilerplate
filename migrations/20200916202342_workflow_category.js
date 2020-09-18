
exports.up = function(knex) {
    console.log('workflow_category table created')
    return knex.schema.createTable(
        'workflow_category', function(table) {
            table.increments('id');
            table.integer('parent_category_id');
            table.string('name');
            table.string('description');
            table.string('logo');
            table.date('createdAt');
            table.date('updatedAt');
            table.integer('status');
          })
    }
  
  exports.down = function(knex) {
      console.log('workflow_category table dropped')
      return knex.schema.dropTable('workflow_category')  
  };
  