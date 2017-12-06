
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (user) => {
		user.increments('id');
		user.string('name', 128).notNullable();
		user.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
