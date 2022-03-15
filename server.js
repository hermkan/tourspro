const dotenv = require('dotenv');
const app = require('./app');
const mongo = require('./mongo');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

async function startServer() {
  await mongo.mongoConnect();
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
}
startServer();
