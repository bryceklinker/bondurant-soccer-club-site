import React from 'react';
import { Root, Routes } from 'react-static';
import { ShellNavbar } from './ShellNavbar';
import { ShellMainContent } from './ShellMainContent';
import { Router } from '@reach/router';

export const Shell = () => {
	return (
		<Root>
			<ShellNavbar />
			<ShellMainContent>
				<Router>
					<Routes path='*' />
				</Router>
			</ShellMainContent>
		</Root>
	);
};

export default Shell
