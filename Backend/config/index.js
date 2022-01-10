const dotenv = require("dotenv");
dotenv.config();

const { PORT, MONGO_URL, SECRETOPRIVATEKEY } = process.env;

const config = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: PORT || 3000,
  },
  jwt: {
    key: SECRETOPRIVATEKEY,
  },
};

module.exports = {
  config,
};
