import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';
const allBooks=  async (req, res) => {
    try {
        // Get the page and limit query parameters, default to page 1 and limit 10
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        // Calculate the number of books to skip based on the current page and limit
        const skip = (page - 1) * limit;

        // Fetch books with pagination
        const books = await Book.find().skip(skip).limit(limit);

        // Count the total number of books in the database
        const totalBooks = await Book.countDocuments();

        // Calculate the total number of pages
        const totalPages = Math.ceil(totalBooks / limit);

        // Send response with books and pagination data
        res.status(200).json({
            books,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalBooks: totalBooks,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }}
export default allBooks;