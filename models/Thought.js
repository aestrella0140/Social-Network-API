const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            Type: String,
            Required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            Type: Date,
            default: Date.now,
            get: (timeStamp) => moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a'),
        },
        username: {
            Type: String,
            Required: true,
        },
        reactions: [reactionSchema],
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;