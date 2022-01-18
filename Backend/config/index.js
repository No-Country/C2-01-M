const dotenv = require("dotenv");
dotenv.config();

const {
  PORT,
  MONGO_URL,
  SECRETOPRIVATEKEY,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SANDBOX,
  PAYPAL_API_LIVE,
  PAYPAL_API_SECRET,
  HOST,
} = process.env;

const config = {
  db: {
    mongo: MONGO_URL,
  },
  app: {
    port: PORT || 3000,
    host: HOST,
  },
  jwt: {
    key: SECRETOPRIVATEKEY,
  },
  paypal: {
    client: PAYPAL_API_CLIENT,
    secret: PAYPAL_API_SECRET,
    sandbox: PAYPAL_API_SANDBOX,
    live: PAYPAL_API_LIVE,
  },
};

module.exports = {
  config,
};
