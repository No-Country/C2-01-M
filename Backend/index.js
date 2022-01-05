const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const { config } = require('./config');

mongoose
	.connect(config.db.mongo)
	.then((res) => {
		const app = express();
		app.use(
			express.urlencoded({
				extended: true,
			}),
		);

		app.use(express.json());

		app.use(helmet());
		app.use(morgan('dev'));
		app.use(cors());

		app.listen(config.app.port, () => {
			console.log(`🔥 Server is running at port ${config.app.port}`);
		});

		console.log('Connected to MongoDB');
	})
	.catch((error) => console.log(error));