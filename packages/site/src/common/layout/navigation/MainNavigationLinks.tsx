import { FC } from 'react';
import { NavLink } from './NavLink';
import { useMainNavigationLinks } from './hooks/useVisibleLinks';

export type MainNavigationLinksProps = {
    onClick: () => void;
};
export const MainNavigationLinks: FC<MainNavigationLinksProps> = ({
    onClick
}) => {
    const navLinks = useMainNavigationLinks().map((data, index) => (
        <NavLink key={index} data={data} onClick={onClick} />
    ));
    return <>{navLinks}</>;
};
