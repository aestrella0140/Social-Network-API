const { User, Thought } = require('../models');
const { ObjectId } = require('mongoose').Types;

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(404).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _Id: req.params.thoughtId });

            if(!thought) {
                return res.status(404).json(console.log('no application with that ID'));
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );

            if(!user) {
                return res.status(404).json(console.log('application created, but found no user with that ID'))
            }

            res.json('created the application !!!');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.body.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if(!thought) {
                return res.status(404).json(console.log('no thought with this id!' ));
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json(console.log('no thought with this id!'));
            }

            const user = await User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json(console.log('thought created but no user with this id!',));
            }

            res.json(console.log('thought successfully deleted!'));
        } catch (err) {
            res.status(500).json(err);
        }
    }
}