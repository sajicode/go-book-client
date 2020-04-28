import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookContext from '../../context/book/bookContext';
import ReviewContext from '../../context/review/reviewContext';
import Spinner from '../layout/Spinner';
import BookDetails from './BookDetails';
import Reviews from '../reviews/Reviews';
import ReviewForm from '../reviews/ReviewForm';

const Book = (props) => {
	const bookContext = useContext(BookContext);
	const reviewContext = useContext(ReviewContext);

	const { book, getBook } = bookContext;
	const { reviews, getBookReviews } = reviewContext;
	const bookID = props.match.params.id;

	console.log('Book ID', bookID);

	useEffect(
		() => {
			getBook(bookID);
			getBookReviews(bookID);
		},
		// eslint-disable-next-line
		[ props.history ]
	);

	//TODO fetch book data & book reviews

	return (
		<div>
			<Link to="/home">Back</Link>
			<Fragment>{book ? <BookDetails book={book} /> : <Spinner />}</Fragment>
			<Fragment>{book && <ReviewForm bookID={book.id} />}</Fragment>
			<Fragment>{reviews ? <Reviews reviews={reviews} /> : <Spinner />}</Fragment>
		</div>
	);
};

export default Book;
