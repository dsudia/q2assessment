module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/moviedb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
