import React from 'react';
import './assets/css/index.css';
import "./assets/scss/index.scss";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div className="flex-shrink-0">
						<img className="h-12 w-12" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="ChitChat Logo" />
					</div>
					<div>
						<div className="text-xl font-medium text-black">ChitChat</div>
						<p className="text-gray-500">You have a new message!</p>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
