import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../toolkitRedux/booksReducer';
import { setStartIndex } from '../../toolkitRedux/indexBooksReducer';
import { setMaxIndex } from '../../toolkitRedux/indexBooksReducer';

import Loader from '../../common/Loader/Loader';

import './style.css';

const Main = () => {
	const books = useSelector((state) => state.books.books.items)
	const isLoading = useSelector((state) => state.loading.isLoading)

	const minIndex = useSelector((state) => state.start.startIndex)
    const maxIndex = useSelector((state) => state.max.maxIndex)

	const dispatch = useDispatch()

	const query = useSelector((state) => state.query.query)
	const filterCategories = useSelector((state) => state.filterCategories.filterCategories)
    const filterNewest = useSelector((state) => state.filterNewest.filterNewest)

    function handleSubmit() {
        dispatch(getBooks({query, filterCategories, filterNewest, startIndex: minIndex + 10, maxResults: maxIndex + 10}))
		dispatch(setStartIndex(minIndex + 10))
		dispatch(setMaxIndex(maxIndex + 10))
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
					{maxIndex === 40 ? <p className='box-books__text'>Книг больше нет</p> : <button className='box-books__btn' onClick={handleSubmit}>Load More</button>}
				</div>
			}
		</div>
	);
}

export default Main;

