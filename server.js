var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    port: 3000,
    host: "localhost"
});

server.views({
    engines: {
        hbs: require('handlebars')
    },
    path: './views',
    partialsPath: './views/partials'
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index', {
            text: 'react demo text'
        });
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.host + ':' + server.info.port);
});