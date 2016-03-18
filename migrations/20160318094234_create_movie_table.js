
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.increments();
    table.string('director');
    table.string('title');
    table.decimal('rating', 3, 1);
    table.string('description', 1000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
