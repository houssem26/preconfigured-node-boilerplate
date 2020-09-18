
exports.up = function(knex) {
    return knex.schema.raw(`
       ALTER TABLE workflow_category
       ADD CONSTRAINT fk_little_1 FOREIGN KEY (parent_category_id) REFERENCES workflow_category(id);    
    `);
}
  
  exports.down = function(knex) {
    return knex.schema.raw(`
       ALTER TABLE workflow_category
       DROP CONSTRAINT fk_little_1;    
    `);
}
