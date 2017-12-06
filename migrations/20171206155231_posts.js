
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (post) => {
		post.increments('id');
		post.integer('userId').notNullable().references('id').inTable('users');
		post.string('text').notNullable();
		post.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
