const express = require('express');
const router = express.Router();

const userController = require('../controllers/userControllers');

router.post('/add-user', userController.addUser);
// router.get('/get-users', userController.getUser);
// router.delete('/user/delete-user/${obj._id', userController.deleteUser);

module.exports = router;