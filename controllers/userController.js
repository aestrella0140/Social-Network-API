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

    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

            if (!user) {
                return res.status(404).json(console.log('no user with that ID'));
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        console.log(req.body);
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(console.log('couldnt create user'));
        }
    },

    async deleteUser(req, res) {
        console.log('delete test 1');
        console.log(req.body);
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json(console.log('couldnt delete user'));
            }
            console.log('delete test 2');
            await Thought.deleteMany({ _id: { $id: user.thoughts } });
            res.json({ message: 'user and associate apps deleted'})
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        console.log(req.body);
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { tags: req.body } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json(console.log('no friend with this id!'));
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: { friendId: req.params.friendId } } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json(console.log('no friend with this id!'));
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

