import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getBooks } from '../../toolkitRedux/booksReducer';

import Loader from '../../common/Loader/Loader';

import './style.css';

const Main = () => {
	const books = useSelector((state) => state.books.books.items)
	const isLoading = useSelector((state) => state.loading.isLoading)

	const dispatch = useDispatch()
    const [startIndex, setStartIndex] = useState(30);
    const [maxResults, setMaxResults] = useState(40);
    
	const query = useSelector((state) => state.query.query)
	const filterCategories = useSelector((state) => state.filterCategories.filterCategories)
    const filterNewest = useSelector((state) => state.filterNewest.filterNewest)

    function handleSubmit() {
        dispatch(getBooks({query, filterCategories, filterNewest, startIndex, maxResults}))
        setStartIndex(startIndex + 10)
        setMaxResults(maxResults + 10)
    }
	
	return (
		<div>
			{isLoading && <Loader />}
			<h2>Найдено книг: {books === undefined ? 0 : books.length}</h2>
			{books && 
				<div className='main'>
					<ul className='box-books'>
						{books?.map((book) => (
							<li className='book' key={book.id}>
								<Link className='book__link' to={`/book/${book.id}`}>
									<img className='book__img' src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="" />
									<p className='book__categories'> {book?.volumeInfo?.categories?.[0] ?? ''}</p>
									<h3 className='book__title'>{book.volumeInfo.title}</h3>
									<p className='book__authors'>{book.volumeInfo.authors}</p>
								</Link>
							</li>
						))}
					</ul>
					{startIndex === 40 ? <p className='box-books__text'>Книг больше нет</p> : <button className='box-books__btn' onClick={handleSubmit}>Load More</button>}
				</div>
			}
		</div>
	);
}

export default Main;