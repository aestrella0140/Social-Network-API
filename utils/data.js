const users = [
    'Chapo',
    'Tatiana',
    'Canelo',
    'Aaron',
    'Gabby',
    'Bruno',
    'Adrian',
    'Mike',
    'Patty',
    'Gabby',
    'Alizia',
    'Dementre',
    'Javon',
    'Edward',
];

const numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]

const friendThoughts = [
    'that was cool',
    'that was hard',
    'wish i was there, but im coding',
    'good job!',
    'heres a cool thought',
    'what do you think of this',
    'have you tried putting it in rice',
    'do a git pull to master',
    'react is going to faze out',
    'its easy to use linux',
];

const reaction = [
    '😆',
    '🤑',
    '🧐',
    '🙄',
    '🫡',
];

const email = [
    '@gmail.com',
    '@hotmail.com',
    '@yahoo.com',
    '@icloud.com',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
`${getRandomArrItem(users)} ${getRandomArrItem(numbers)}`;

const getRandomThought = (int) => {
    let reactions = [];
    for (let i = 0; i < int; i++) {
        reactions.push({
            thoughtText: getRandomArrItem(friendThoughts),
            reactions: [...getReactions(3)],
        });
    }
    return reactions;
};

const getReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(reaction);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionbody: getRandomArrItem(reaction),
            username: getRandomUsername(),
        });
    }
    return results;
};

const getRandomEmail = () => {
  return  `${getRandomArrItem(users)}${getRandomArrItem(email)}`;
};

const getRandomFriend = ()=> {
return `${getRandomArrItem(users)}`;
}

module.exports = { getRandomUsername, getRandomThought, getRandomEmail, getRandomFriend };
