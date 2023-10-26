const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
        },
        reactionbody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        CreatedAt: {
            Type: Date,
            default: Date.now,
            get: (timeStamp) => moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a'),
        }
    }
);

module.exports = reactionSchema;