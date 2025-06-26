import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';
const deleteBook=async (req, res) => {
  try {
    // Extract the ID from the URL parameter
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    // Attempt to find and delete the book by ID
    const deletedBook = await Book.findByIdAndDelete(id);

    // If the book was not found, return a 404 error
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Return a success message indicating the book has been deleted
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error: error.message });
  }
};
export default deleteBook;
