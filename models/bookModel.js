import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long'],
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [3, 'Author name must be at least 3 characters long'],
    },
    publishedDate: {
        type: Number,
        required: [true, 'Publication year is required'],
        min: [1900, 'Publication year must be later than 1900'],
        max: [new Date().getFullYear(), `Publication year cannot be in the future`],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
});

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;
