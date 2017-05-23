import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    username: string;
    email : string;
    password : string;
    memberships : Array<number>;
    owner : Array<number>;
}
export default IUserModel;
