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

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import AuthWrapper from './components/Admin/AuthWrapper';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#343A40'
		}
	}
});

const useStyles = makeStyles(theme => ({
	content: {
		marginTop: '48px',
		paddingTop: '12px',
		marginBottom: '48px',
		paddingBottom: '12px',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '80px'
		}
	}
}));

const App = () => {

	const classes = useStyles();

	return (
		<AuthWrapper>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<Router>
					<Header/>
					<div className={classes.content}>
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
			</ThemeProvider>
		</AuthWrapper>
	);
}

export default App;
