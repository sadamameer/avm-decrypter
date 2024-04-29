// index.js
const fastify = require('fastify')();

fastify.get('/', async () => {
  return { status: 'running.' };
});

fastify.post('/get-refined-string', async (request, reply) => {
  const edk = "HKKJ87687JH7657FGHRSRE46";
  const messyRefinedManager = require("crypto-js");
  const bytes = messyRefinedManager.AES.decrypt(request.body.payload, edk)
  const originalInput = bytes.toString(messyRefinedManager.enc.Utf8)
  reply.send({
    output : originalInput
  });
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server listening on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();