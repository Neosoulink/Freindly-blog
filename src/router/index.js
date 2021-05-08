import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

// SCREENS
function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
