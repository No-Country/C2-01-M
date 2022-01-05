const dotenv = require('dotenv');
dotenv.config();

const {
	APP_PORT,
    MONGO_URL
} = process.env;

const config = {
    db: {
        mongo: MONGO_URL
    },
    app: {
        port: APP_PORT
    }
}

module.exports = {
    config
}