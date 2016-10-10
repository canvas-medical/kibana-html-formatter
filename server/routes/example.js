export default function (server) {

  server.route({
    path: '/api/kibana_html_field/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
