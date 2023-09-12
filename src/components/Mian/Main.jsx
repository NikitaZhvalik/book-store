import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const Main = () => {
	const books = useSelector((state) => state.books.books)

	return (
		<div className='main'>
			{/* {isLoading && <Loader />} */}
			<h2>Найдено книг: {books.length}</h2>
			<ul className='box-books'>
				{books.map((book) => (
					<li className='book' key={book.id}>
						<Link to={`/book/${book.id}`}>
							<img className='book__img' src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="" />
							<p className='book__categories'> {book?.volumeInfo?.categories?.[0] ?? ''}</p>
							<h3 className='book__title'>{book.volumeInfo.title}</h3>
							<p className='book__authors'>{book.volumeInfo.authors}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Main;