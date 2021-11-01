import React, {FunctionComponent} from 'react';
import {DesktopNavbar} from './DesktopNavbar';
import {MobileNavbar} from './MobileNavbar';

export interface ShellNavbarProps {

}

export const ShellNavbar: FunctionComponent<ShellNavbarProps> = ({children}) => {
	return (
		<>
			<DesktopNavbar>
				{children}
			</DesktopNavbar>
			<MobileNavbar>
				{children}
			</MobileNavbar>
		</>
	)
}
