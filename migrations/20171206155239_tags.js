
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', (tag) => {
		tag.increments('id');
		tag.string('tag', 16).notNullable();
		tag.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tags')
};