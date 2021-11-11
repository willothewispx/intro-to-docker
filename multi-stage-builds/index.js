'use strict'
const Hapi = require('@hapi/hapi')

async function start() {
  // Create a server with a host and port
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 3000
  });

  // Add route
  server.route({
    method: 'GET',
    path: '/',
    handler: async function(request, h) {
      // standard way of loggin in hapi
      request.log(['a', 'b'], 'Request into hello world');
      // one can also use a pino instance, which is faster
      request.logger.info('In handler %s', request.path);

      return 'hello world';
    }
  });

  await server.register({
    plugin: require('hapi-pino'),
    options: {
      redact : ['req.headers.authorization'],
    }
  });

  server.logger.info('another way for accessing it');

  server.log(['subsystem'], 'third way for accessing it');

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err)
  process.exit(1)
})
