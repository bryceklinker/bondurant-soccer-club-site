import { FC } from 'react';
import { NavLink } from './NavLink';
import { MAIN_NAVIGATION_LINKS } from '../../routing/route-names';

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
