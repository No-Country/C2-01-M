const dotenv = require("dotenv");
dotenv.config();

const { APP_PORT, MONGO_URL, SECRETOPRIVATEKEY } = process.env;

const config = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: APP_PORT,
  },
  jwt: {
    key: SECRETOPRIVATEKEY,
  },
};

module.exports = {
  config,
};
