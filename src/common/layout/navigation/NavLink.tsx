import { FC } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
    Button,
    ButtonProps,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps
} from '@chakra-ui/react';
import { LinkData } from '../../state/models';

export type NavLinkProps = Omit<
    ChakraLinkProps,
    'as' | 'colorScheme' | 'href'
> & {
    data: LinkData;
};
export const NavLink: FC<NavLinkProps> = ({ data, ...rest }) => {
    return (
        <ChakraLink
            as={GatsbyLink}
            to={data.url}
            className={'nav-link'}
            activeClassName={'active'}
            aria-label={data.text}
            {...rest}>
            <Button colorScheme={'black'}>{data.text}</Button>
        </ChakraLink>
    );
};
