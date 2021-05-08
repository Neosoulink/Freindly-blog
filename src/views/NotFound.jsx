import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundView() {
	return (
		<div style={styles.screen} className="subpixel-antialiased flex flex-col justify-center items-center">
			<h2 className="text-2xl">404 / Not found!</h2>
			<Link to="/" className="text-base text-indigo-400 hover:text-indigo-500">Go home</Link>
		</div>
	)
}

const styles = {};

styles.screen = {
	position: 'absolute',
	height: '100%',
	width: '100%',
}
