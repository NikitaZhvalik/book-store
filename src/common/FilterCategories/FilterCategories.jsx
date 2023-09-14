import { useDispatch, useSelector } from "react-redux";
import { setFilterCategories } from "../../toolkitRedux/filterCategoriesReducer";

import { filterCategories } from "../../components/Header/const";

import './style.css';

const FilterCategories = () => {
    const dispatch = useDispatch()
    const filterValue = useSelector((state) => state.filterCategories.filterCategories)

    const handleChange = (e) => {
        const value = e.target.value
        dispatch(setFilterCategories(value))
    }

    return (
        <div className="filterCategories-box">
            <p>Categories:</p>
            <select className="filterCategories" name="categories" onChange={handleChange} value={filterValue}>
                return {filterCategories.map((filter) => <option value={filter.name} key={filter.name}>{filter.name}</option>)}
            </select>
        </div>
    )
}
 
export default FilterCategories;