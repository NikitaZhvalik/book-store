import { setFilterNewest } from "../../toolkitRedux/filterNewestReducer";
import { useDispatch, useSelector } from "react-redux";

import './style.css'

const FilterNewest = () => {
	const dispatch = useDispatch()
	const filterValue = useSelector((state) => state.filterNewest.filterNewest)

	const handleChange = (e) => {
		const value = e.target.value
		dispatch(setFilterNewest(value))
	}

	return (
		<div className="filterNewest-box">
			<p>Сортировка по:</p>
			<select className="filterNewest" name="categories" onChange={handleChange} value={filterValue}>
				<option value="relevance">relevance</option>
				<option value="newest">newest</option>
			</select>
		</div>
	);
};

export default FilterNewest;
