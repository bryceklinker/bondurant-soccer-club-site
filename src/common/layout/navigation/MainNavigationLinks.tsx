import { FC, useMemo } from 'react';
import { NavLink } from './NavLink';
import { MAIN_NAVIGATION_LINKS } from '../../routing/route-names';
import { useDefaultVisibility } from '../../hooks/use-visibility';

export type MainNavigationLinksProps = {
    onClick: () => void;
};
export const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    onClick
}) => {
    const visibility = useDefaultVisibility();
    const navLinks = MAIN_NAVIGATION_LINKS.map((data, index) => (
        <NavLink
            key={index}
            data={data}
            onClick={onClick}
            visibility={visibility}
        />
    ));
    return <>{navLinks}</>;
};
