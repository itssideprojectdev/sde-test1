import express from 'express';

const appId = Math.random().toString(36).substring(7);
async function main() {
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello asdfasdf + ' + appId);
  });
  app.listen(3000, () => {
    console.log('ServerAaasadaa ais da daon http://localhost:3000 + ' + appId);
  });
}

main().catch(console.error);
