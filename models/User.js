const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            Type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            Type: String,
            Required: true,
            Unique: true,
            Validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;