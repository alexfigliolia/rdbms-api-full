exports.up = function(knex, Promise) {
  return knex.schema.createTable('postTags', (postTag) => {
		postTag.increments('id');
		postTag.integer('postId').notNullable().references('id').inTable('posts');
		postTag.integer('tagId').notNullable().references('id').inTable('tags');
		postTag.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('postTags')
};