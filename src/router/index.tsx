import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../components/Pages/Details";
import Home from "../components/Pages/Home";
import { Paths } from "../constants/Paths";

const App: React.ElementType = () => {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path={`${Paths.details}/:id`}>
					<Details />
				</Route>
				<Route path={[Paths.default, Paths.home]}>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
