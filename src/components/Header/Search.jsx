import { useDispatch } from 'react-redux';
import { queryAction } from '../../toolkitRedux/queryReducer';

const Search = () => {
    const dispatch = useDispatch()

    const handleChange = (value) => {
        dispatch(queryAction(value))
    }
    
    return (
        <div className="search">
            <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
            <input onChange={(e) => handleChange(e.target.value)} className="input" placeholder="Find book..." required="" type="text"/>
            <button className="reset" type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    )
}
 
export default Search;