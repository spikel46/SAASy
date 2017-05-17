import Mongoose = require("mongoose");

interface IChatModel extends Mongoose.Document {
	sender: string;
	toRoom: number;
	content: string;
	timestamp: Date;
	score: number;
}
export default IChatModel;
