// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/blog.sqlite3'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      host: 'localhost',
      database: 'blog-db',
      user:     'alexfigliolia',
      password: 'Jan1991a1a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }

};
