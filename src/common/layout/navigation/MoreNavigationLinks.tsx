import { FC } from 'react';
import { NavLink } from './NavLink';
import { MORE_INFO_NAVIGATION_LINKS } from '../../routing/route-names';

export type MoreNavigationLinksProps = {
    onClick: () => void;
};

export const MoreNavigationLinks: FC<MoreNavigationLinksProps> = ({
    onClick
}) => {
    const moreNavLinks = MORE_INFO_NAVIGATION_LINKS.map((data, index) => (
        <NavLink key={index} data={data} onClick={onClick} />
    ));
    return <>{moreNavLinks}</>;
};
