import express from 'express';

async function main() {
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.listen(3000, () => {
    console.log('ServerAaasadaa ais da daon http://localhost:3000');
  });
}

main().catch(console.error);
