import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Admin from './components/Admin';
import PublicPoll from './components/PublicPoll';
import Footer from './components/Footer';
import Authorize from './components/Auth/Authorize';

import AuthWrapper from './components/Admin/AuthWrapper';

const App = () => {
	return (
		<Router>
			<Header/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/poll/:pollId" exact component={PublicPoll} />
				<Route path="/admin">
					<AuthWrapper>
						{accessToken => <Admin accessToken={accessToken} />}
					</AuthWrapper>
				</Route>
				<Route path="/auth/authorize" exact component={Authorize} />
			</Switch>
			<Footer/>
		</Router>
	);
}

export default App;
