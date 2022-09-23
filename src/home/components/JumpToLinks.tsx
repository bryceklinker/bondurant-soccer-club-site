import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Link } from 'gatsby';
import { Button } from '@chakra-ui/react';
import { RouteNames } from '../../common/routing/route-names';
import { RowFlex } from '../../common/layout/RowFlex';

import './JumpToLinks.css';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
};

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({
    to,
    children
}) => {
    return (
        <Link to={to}>
            <Button
                className={'jump-link large-button'}
                aria-label={'jump link'}>
                {children}
            </Button>
        </Link>
    );
};

export const JumpToLinks: FunctionComponent = () => {
    return (
        <RowFlex
            justifyContent={'center'}
            flexWrap={'wrap'}
            gap={'1em'}
            className={'jump-link-container'}>
            <JumpToButton to={RouteNames.GetInvolved}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={RouteNames.ContactUs}>Contact Us</JumpToButton>
            <JumpToButton to={RouteNames.Locations}>Locations</JumpToButton>
            <JumpToButton to={RouteNames.Schedules}>Schedules</JumpToButton>
        </RowFlex>
    );
};
