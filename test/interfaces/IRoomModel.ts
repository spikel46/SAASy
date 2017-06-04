import Mongoose = require("mongoose");

interface IRoomModel extends Mongoose.Document {
    roomID: number;
    title: string;
    isActive : boolean;
    isPublic : boolean;
    description : string;
    users : Array<string>;
    moderators : Array<string>;
    admin: string;
    keywords: Array<string>;
}
export default IRoomModel;
