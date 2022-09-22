import { FC } from 'react';
import { MAIN_NAVIGATION_LINKS } from '../../routing';
import { NavLink } from './NavLink';

export type MainNavigationLinksProps = {
    onClick: () => void;
};
export const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    onClick
}) => {
    const navLinks = MAIN_NAVIGATION_LINKS.map((data, index) => (
        <NavLink key={index} data={data} onClick={onClick} />
    ));
    return <>{navLinks}</>;
};
