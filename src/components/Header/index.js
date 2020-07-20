import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
	AppBar,
	Container,
	Toolbar,
	Button,
	Typography,
	IconButton,
	Hidden,
	SwipeableDrawer,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1
	},
	link: {
		color: theme.palette.text.primary,
		textDecoration: 'none',
		'&:hover': {
			color: theme.palette.action.active,
			textDecoration: 'none'
		}
	},
	drawer: {
		width: '250px'
	}
}));

const menuItems = [
	{
		text: 'About',
		link: '/about'
	},
	{
		text: 'My polls',
		link: '/admin/poll'
	}
];

const Header = () => {

	const classes = useStyles();

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawer = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawer = () => {
		setDrawerIsOpen(false);
	};

	return (
		<AppBar position="fixed">
			<Container>
				<Toolbar variant="dense" disableGutters>
					<Typography variant="h6" className={classes.title}>
						<Link to="/" className={classes.link}>WhatDoYouThink</Link>
					</Typography>
					<Hidden xsDown>
						{menuItems.map((item, index) => (
							<Button color="inherit" component={Link} to={item.link} className={classes.link} key={index}>
								{item.text}
							</Button>
						))}
					</Hidden>
					<Hidden smUp>
						<IconButton edge="start" color="inherit" aria-label="menu" onClick={openDrawer}>
							<MenuIcon/>
						</IconButton>
						<SwipeableDrawer
							anchor="right"
							open={Boolean(drawerIsOpen)}
							onClose={closeDrawer}
							onOpen={openDrawer}
						>
							<List
								className={classes.drawer}
							>
								{menuItems.map((item, index) => (
									<ListItem button key={index} component={Link} to={item.link} onClick={closeDrawer}>
										<ListItemText primary={item.text}></ListItemText>
									</ListItem>
								))}
							</List>
						</SwipeableDrawer>
					</Hidden>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;