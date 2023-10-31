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


router.route('/:userId').get(getSingleUser).delete(deleteUser);


router.route('/:userId/reaction').post(createUser);


router.route('/:userId').get(getSingleUser).put(createUser);


router.route('/:userId/friends/:friendId').post(addFriend);

//  need remove friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);


module.exports = router;


