const FilterNewest = () => {
    return (
        <div className="range">
            <p>Sorting by:</p>
            <select name="categories" id="category-select">
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </div>
    );
}
 
export default FilterNewest;