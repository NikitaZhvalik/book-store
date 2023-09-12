import { filterCategories } from "./const";

const FilterCategories = () => {

    const handleChange = (e) => {
        // const books = e.target.value;
        // setFilter((filter) => ({ ...filter, books }));
    };

    return (
        <div className="range">
            <p>Categories:</p>
            <select name="categories" onChange={handleChange}>
                return {filterCategories.map((filter) => <option value={filter.name} key={filter.name}>{filter.name}</option>)}
            </select>
        </div>
    );
}
 
export default FilterCategories;