const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000
});

server.start((error) => {
    if (error) {
        throw error;
    }

    console.log(`library - microservices connect in ${server.info.uri}`);
});