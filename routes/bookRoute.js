import express from 'express';
import Book from '../models/bookModel.js';
import mongoose from 'mongoose';
import addBook from '../controllers/addBook.js';
import deleteBook from '../controllers/deleteBook.js';
import getBook from '../controllers/getBook.js';
import updateBook from '../controllers/updateBook.js';
import allBooks from '../controllers/allBooks.js';
const router = express.Router();


router.post('/addbook', addBook)
router.get('/allbook/:id', allBooks);

router.get('/allbook', getBook);
//update book by ID
router.put('/allbook/:id', updateBook);
//delete book by ID
router.delete('/allbook/:id', deleteBook);

export default router;