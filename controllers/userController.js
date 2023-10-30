const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const HeadCount = async () => {
    const numberOfUsers = await User.aggregate()
    .count('userCount');
    return numberOfUsers;
}

