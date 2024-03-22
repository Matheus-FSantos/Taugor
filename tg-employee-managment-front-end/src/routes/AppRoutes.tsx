import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NewEmployee } from "../pages/auth/newEmployee";
import { Error } from "../pages/error";

const AppRoutes = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/new-employee" element={ <NewEmployee /> } />
				<Route path="/*" element={ <Error title="404 - Not Found" description="Page not found!" pageTitle="Error"/> } />
			</Routes>
		</BrowserRouter>
	);
}

export { AppRoutes };
