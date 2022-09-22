import { LinkData } from '../../state';
import { FC } from 'react';
import { Link } from 'gatsby';
import { Button } from '@chakra-ui/react';

export type NavLinkProps = {
    data: LinkData;
    onClick: () => void;
};
export const NavLink: FC<NavLinkProps> = ({ onClick, data }) => {
    return (
        <Link
            to={data.url}
            className={'nav-link'}
            activeClassName={'active'}
            aria-label={data.text}>
            <Button>{data.text}</Button>
        </Link>
    );
};
