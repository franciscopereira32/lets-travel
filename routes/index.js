var express = require('express');
var router = express.Router();

//require controllers
const hotelController = require('../controllers/hotelController');

/* GET home page. */
router.get('/', hotelController.homePage);

router.get('/all', hotelController.listAllHotels);

//ADMIN Routes
router.get('/admin', hotelController.adminPage);
router.get('/admin/add', hotelController.createHotelGet);

// router.get('sig-up', hotelController.signUp, hotelController.logIn);
// router.get('log-in', hotelController.logIn);

module.exports = router;