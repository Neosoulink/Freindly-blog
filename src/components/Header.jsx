import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const HeaderLink = ({ label, to = "/", activeExact = true, addedClass = "" }) => {
	let match = useRouteMatch({
		path: to,
		exact: activeExact
	});

	return <Link
		to={to}
		className={
			(match ? "text-white bg-indigo-500 " : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 ") +
			"p-2 lg:px-4 md:mx-2 rounded transition-colors duration-300 " +
			addedClass}>
		{label}
	</Link>
}

export default function Header() {
	return (
		<div className="shadow-sm mb-5">
			<nav className="bg-white py-2 md:py-4">
				<div className="container px-4 mx-auto md:flex md:items-center">

					<div className="flex justify-between items-center">
						<Link to="/" className={"font-bold text-xl text-indigo-500"}>FBlog</Link>

						<button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
							<i className="fas fa-bars"></i>
						</button>
					</div>

					<div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
						<HeaderLink label="Home" />
						<HeaderLink label="About" to="/about" />

						<HeaderLink label="Login" to="/login" addedClass="text-indigo-500 text-center border border-solid border-indigo-500 rounded hover:bg-indigo-500 hover:text-white transition-colors mt-1 md:mt-0 md:ml-1" />
					</div>
				</div>
			</nav>
		</div>
	)
}
