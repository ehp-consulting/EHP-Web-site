const http = require('http');

for (let i = 0; i < 6; i++) {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/visuals',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const req = http.request(options, (res) => {
    console.log(`Req ${i} STATUS: ${res.statusCode}`);
  });

  req.on('error', (e) => {
    console.error(`Req ${i} error: ${e.message}`);
  });

  req.write(JSON.stringify({ id: `test${i}`, prompt: `test${i}` }));
  req.end();
}
