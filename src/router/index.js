import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

// SCREENS
import AboutView from "../views/About";
import HomeView from "../views/Home";

const routes = [
	{
		path: "/",
		component: HomeView
	},
	{
		path: "/about",
		component: AboutView
	}
];

function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</BrowserRouter>
	);
}
