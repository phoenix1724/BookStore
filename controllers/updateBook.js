import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';
const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBookData = req.body;

    // Find the book by ID and update it
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedBookData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Return the updated book
    res.status(200).json({
      message: 'Book updated successfully',
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};
export default updateBook;
