import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Admin from './components/Admin';
import PollsAdminList from './components/Admin/Polls/PollsAdminList';
import PollsAdminEdit from './components/Admin/Polls/PollsAdminEdit';
import About from './components/About';
import PublicPoll from './components/PublicPoll';
import Footer from './components/Footer';
import Authorize from './components/Admin/Authorize';
import AnalyticsTraker from './utils/analytics';

import AuthWrapper from './components/Admin/AuthWrapper';

const App = () => {
	return (
		<AuthWrapper>
			<Router>
				<Header/>
				<div style={{ marginBottom: '100px' }}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" exact component={About} />
						<Route path="/poll/:pollId" exact component={PublicPoll} />
						<Route path="/admin">
							<Admin>
								<Route path="/admin/poll" exact component={PollsAdminList} />
								<Route path="/admin/poll/:pollId" exact component={PollsAdminEdit} />
							</Admin>
						</Route>
						<Route path="/auth/authorize" exact component={Authorize} />
					</Switch>
				</div>
				<Footer/>
				<AnalyticsTraker />
			</Router>
		</AuthWrapper>
	);
}

export default App;
