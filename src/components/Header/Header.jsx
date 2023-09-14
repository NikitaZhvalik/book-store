import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from "../../toolkitRedux/booksReducer";

import FilterCategories from "../../common/FilterCategories/FilterCategories";
import FilterNewest from "../../common/FilterNewest/FilterNewest";
import Search from "../../common/Search/Search";

import './style.css';

const Header = () => {
	const dispatch = useDispatch()
    
	const query = useSelector((state) => state.query.query) //todo
	const filterCategories = useSelector((state) => state.filterCategories.filterCategories) //todo
    const filterNewest = useSelector((state) => state.filterNewest.filterNewest) //todo

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getBooks({query, filterCategories, filterNewest}))
    }

    return (
        <header className="header">
            <h1 className="header__title">Search books</h1>
            <form onSubmit={handleSubmit} className="form" method="GET">
                <Search />
                <div className="row header__row">
                    <FilterCategories/>
                    <FilterNewest />
                </div>
            </form>
        </header>
    );
}
 
export default Header;