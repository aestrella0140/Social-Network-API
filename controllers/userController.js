const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');



module.exports = {
    async getUser(req, res) {
        try {
            const users = await User.find();

            const UserObj = {
                users,
               
            };

            res.json(UserObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },


}

