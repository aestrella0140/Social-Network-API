const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,

} = require('../../controllers/userController');

// get all users
router.route('/').get(getUser)
// .post(createUser);

// get user by id
// router.route('/:userId').get(getSingleUser).delete(deleteUser);


// router.route('/:userId/reaction').post(addReaction);


// router.route('/:userId').get(getSingleUser).put(createUser);


// router.route('/:userId/friends/:friendId').post(addFriend);

 // need remove friend

module.exports = router;


