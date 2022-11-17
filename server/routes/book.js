let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose

// connect with book model

let Book = require('../models/book');
let bookController = require('../controller/book');
/* CRUD Operation*/

/* Read Operation */
/* Get route for the book list */

router.get('/',bookController.displayBookList);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add', bookController.displayAddPage);
/* Post route for processing the Add-Page -- Create Operation */
router.post('/add',bookController.processAddPage);
/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',bookController.displayEditPage);
/* Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', bookController.processEditPage);
/* Delete Operation */
/* Get to perform Delete Operation -- Deletion */
router.get('/delete/:id',bookController.performDelete);


module.exports=router;