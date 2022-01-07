const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, 'The name is required'],
	},
	email: {
		type: String,
		required: [true, 'The email is required'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'The password is required'],
	},
	img: {
		type: String,
	},
	role: {
		type: String,
		required: false,
		default: 'USER_ROLE',
		emun: ['ADMIN_ROLE', 'USER_ROLE'],
	},
	state: {
		type: Boolean,
		default: true,
	},
});

module.exports = mongoose.model("user", UserSchema);
