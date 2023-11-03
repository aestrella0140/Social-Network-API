const connection = require('../config/connections');
const { Thought, User } = require('../models');
const { collection } = require('../models/Thought');
const { getRandomUsername, getRandomThought, getRandomEmail, getRandomFriend } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await Thought.deleteMany({});

    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThought(10);

    for (let i = 0; i < 20; i ++) {

        const username = getRandomUsername();
        const email = getRandomEmail();
        const friends = getRandomFriend();

        users.push({
            username,
            email,
            thoughts,
            friends,
        });
    }

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});