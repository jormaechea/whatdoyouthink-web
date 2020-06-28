import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import PublicPoll from './components/PublicPoll';

const App = () => {
	return (
		<Router>
			<Header/>
			<Switch>
				<Route path="/poll/:pollId" component={PublicPoll} />
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
