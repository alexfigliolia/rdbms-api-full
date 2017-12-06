
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {text: 'Hello this is a post'},
        {text: 'Ciao this is a post'},
        {text: 'Hola this is a post'}
      ]);
    });
};
