import { FC } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

import { LinkData } from '../../state/models';

export type NavLinkProps = Omit<
    GatsbyLinkProps<never>,
    'className' | 'to' | 'ref'
> & {
    data: LinkData;
};
export const NavLink: FC<NavLinkProps> = ({ data, ...rest }) => {
    return (
        <GatsbyLink
            to={data.url}
            className={'nav-link px-4 py-2 text-white font-bold'}
            activeClassName={'border-b-blue-700 border-b-2'}
            aria-label={data.text}
            {...rest}>
            {data.text}
        </GatsbyLink>
    );
};
