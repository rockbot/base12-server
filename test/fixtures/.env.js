module.exports = {
  view_engine: 'jade',
  view_options: { layout: false },
  port: 4000,
  timeout: 10000,
  cookie_secret: 'mysecret',
  session: {
    key: 'mykey'
  },
  redis: {
    host: 'localhost',
    port: 6379
  }
};
