let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about',indexController.displayAboutPage);

/* GET products page. */
router.get('/products',indexController.displayProductPage);

/* GET services page. */
router.get('/services',indexController.displayServicePage);
// CRUD --> CREATE, Read, Update , Delete
// Get - Post - Read - Put
/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
