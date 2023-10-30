const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
} = require('../../controllers/userController');

// get all users
router.route('/').get(getUser).post(createUser);

// get user by id
router.route('/:userId').get(getSingleUser).delete(deleteUser);


router.route('/:userId/reaction').post(addReaction);


router.route('/:userId').get(getSingleUser).put(createUser);


router.route('/:userId/reaction/reactionId').delete(removeReaction);

module.exports = router;


