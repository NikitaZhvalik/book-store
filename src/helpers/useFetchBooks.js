import { addManyBooksAction } from "../toolkitRedux/booksReducer";

export const fetchBooks = ({query}) => { //TODO

	const key = "AIzaSyCd535-0dsJ9kCIUPlVYnahGx0esWYFhTA"
	const minQuantityBooks = 0
	const maxQuantityBooks = 8 //TODO Поменять на 40
	// const orderBy = 'orderBy=newest&'
	const orderBy = 'orderBy=relevance&'
	
	return function (dispatch) {
		// const [isLoading, setLoading] = useState(true)
		fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+terms&${orderBy}startIndex=${minQuantityBooks}&maxResults=${maxQuantityBooks}&key=${key}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(addManyBooksAction(data))
				// setLoading(false)
			});
	};
};


