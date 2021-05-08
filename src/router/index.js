import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

// SCREENS
function Home() {
	return <h2>Home Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/about",
		component: About
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
