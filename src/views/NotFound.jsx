import React from 'react';

export default function NotFoundView() {
	return (
		<div style={styles.screen}>
			<h2>404 / Not found!</h2>
		</div>
	)
}

const styles = {};

styles.screen = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	display: 'grid',
	placeItems: 'center',
}
