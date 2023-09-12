import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Book from "../pages/Book/Book";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/book/:id" element={<Book />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
