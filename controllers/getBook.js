import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';
const getBook=async (req, res) => {
  try {
    // Optionally, add pagination to limit results per page
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch books with pagination
    const books = await Book.find().skip(skip).limit(limit);

    // Return the fetched books
    res.status(200).json({
      message: 'Books fetched successfully',
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};
export default getBook;
