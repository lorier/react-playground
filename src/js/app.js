// $ = jQuery = require('jquery');

// var App = console.log('Hello world from Browserify');

// module.exports = App;
import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {

	render () {
		return (
			<h1>Hello, world???</h1>
		);
	}

}

ReactDOM.render(<MyApp />, document.getElementById('root'));