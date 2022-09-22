import { FC } from 'react';
import { MORE_INFO_NAVIGATION_LINKS } from '../../routing';
import { NavLink } from './NavLink';

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
