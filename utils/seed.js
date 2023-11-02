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

    for (let i = 0; i < 20; i ++) {
        const thoughts = getRandomThought(10);

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

    await Thought.collection.insertOne({
        thoughtText: getRandomThought,
        username: [...users],
    });

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});