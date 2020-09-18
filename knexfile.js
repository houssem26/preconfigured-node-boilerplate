// Update with your config settings.

module.exports = {

  development: {
      client: 'pg',
      version: '10',
      connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'root',
        database : 'db'
      },    
    migrations: {
      directory: './migrations'
    },
    seeds: { directory: './data/seeds' }
  },
  test: {
    client: 'pg',
    version: '10',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'test'
    },    
  migrations: {
    directory: './migrations'
  },
  seeds: { directory: './data/seeds' }
},

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

}
