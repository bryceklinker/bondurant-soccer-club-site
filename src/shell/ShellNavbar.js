import React from 'react';
import {Link} from '@reach/router';
import {
	NavbarContainer,
	Navbar,
	NavbarWrapper,
	NavbarBrand
} from '@material-tailwind/react';

export const ShellNavbar = () => {
	return (
		<Navbar navbar>
			<NavbarContainer>
				<NavbarWrapper>
					<Link to={'/'}>
						<NavbarBrand>Bondurant Soccer Club</NavbarBrand>
					</Link>
					<Link to={'about'}>About</Link>
				</NavbarWrapper>
			</NavbarContainer>
		</Navbar>
	)
}
