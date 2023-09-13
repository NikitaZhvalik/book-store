import { setFilterNewest } from "../../toolkitRedux/filterNewestReducer";
import { useDispatch, useSelector } from "react-redux";

const FilterNewest = () => {
	const dispatch = useDispatch()
	const filterValue = useSelector((state) => state.filterNewest.filterNewest)

	const handleChange = (e) => {
		const value = e.target.value
		dispatch(setFilterNewest(value))
	}

	return (
		<div className="range">
			<p>Сортировка по:</p>
			<select
				onChange={handleChange}
				value={filterValue}
				name="categories"
				id="category-select"
			>
				<option value="relevance">relevance</option>
				<option value="newest">newest</option>
			</select>
		</div>
	);
};

export default FilterNewest;
