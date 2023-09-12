import FilterCategories from "./FilterCategories";
import FilterNewest from "./FilterNewest";
import Search from "./Search";

import { useDispatch } from 'react-redux';
import { fetchBooks } from "../../helpers/useFetchBooks";
import { useSelector } from 'react-redux';


const Header = () => {
	const dispatch = useDispatch();
	const query = useSelector((state) => state.query.query) //TODO

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchBooks({query})) //TODO
    }

    return (
        <header className="header">
            <h1 className="header__title">Search books</h1>
            <form onSubmit={handleSubmit} className="form" method="GET">
                <Search />
                <div className="wrapper">
                    <FilterCategories/>
                    <FilterNewest />
                </div>
            </form>
        </header>
    );
}
 
export default Header;