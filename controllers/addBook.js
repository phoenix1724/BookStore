import mongoose from 'mongoose';
import Book from '../models/bookModel.js'; 

const addBook = async (req, res) => {
  try {
    // Create a new book instance with the data from the request body
    const newBook = new Book(req.body);

    // Save the new book to the database
    const savedBook = await newBook.save();

    // Return a success message and the saved book data
    res.status(201).json({
      message: 'Book added successfully',
      data: savedBook,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ message: 'Error adding book', error: error.message });
  }
};
export default addBook;