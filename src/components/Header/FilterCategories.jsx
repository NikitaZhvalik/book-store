import { filterCategories } from "./const";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategories } from "../../toolkitRedux/filterCategoriesReducer";

const FilterCategories = () => {
    const dispatch = useDispatch()
    const filterValue = useSelector((state) => state.filterCategories.filterCategories)

    const handleChange = (e) => {
        const value = e.target.value
        dispatch(setFilterCategories(value))
    }

    return (
        <div className="range">
            <p>Categories:</p>
            <select name="categories" onChange={handleChange} value={filterValue}>
                return {filterCategories.map((filter) => <option value={filter.name} key={filter.name}>{filter.name}</option>)}
            </select>
        </div>
    )
}
 
export default FilterCategories;