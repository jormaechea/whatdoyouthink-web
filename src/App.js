import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Admin from './components/Admin';
import PollsAdmin from './components/Admin/Polls/PollsAdmin';
import PublicPoll from './components/PublicPoll';
import Footer from './components/Footer';
import Authorize from './components/Admin/Authorize';

import AuthWrapper from './components/Admin/AuthWrapper';

const App = () => {
	return (
		<AuthWrapper>
			<Router>
				<Header/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/poll/:pollId" exact component={PublicPoll} />
					<Route path="/admin">
						<Admin>
							<Route path="/admin/polls">
								<PollsAdmin />
							</Route>
						</Admin>
					</Route>
					<Route path="/auth/authorize" exact component={Authorize} />
				</Switch>
				<Footer/>
			</Router>
		</AuthWrapper>
	);
}

export default App;
