import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { Link } from 'gatsby';
import { Button } from '@chakra-ui/react';
import { RouteNames } from '../common/routing/route-names';
import { RowFlex } from '../common/layout/RowFlex';
import { useIsSmallScreen } from '../common/hooks/use-screen-size';
import { ColumnFlex } from '../common/layout/ColumnFlex';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
};

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({
    to,
    children
}) => {
    const isSmallScreen = useIsSmallScreen();
    const size = useMemo(
        () => (isSmallScreen ? '6em' : '9em'),
        [isSmallScreen]
    );
    const borderRadius = useMemo(
        () => (isSmallScreen ? '3em' : '4.5em'),
        [isSmallScreen]
    );
    return (
        <Link to={to}>
            <Button
                height={size}
                width={size}
                borderRadius={borderRadius}
                boxShadow={'4px 4px 4px dimgray'}
                className={'large-button'}
                aria-label={'jump link'}>
                {children}
            </Button>
        </Link>
    );
};

export const JumpToLinks: FunctionComponent = () => {
    const isSmallScreen = useIsSmallScreen();
    const alignContent = useMemo(
        () => (isSmallScreen ? 'center' : 'start'),
        [isSmallScreen]
    );
    const gap = useMemo(
        () => (isSmallScreen ? '0.5em' : '1em'),
        [isSmallScreen]
    );
    return (
        <RowFlex
            justifyContent={'center'}
            flexWrap={'wrap'}
            gap={gap}
            alignContent={alignContent}
            flex={0}>
            <JumpToButton to={RouteNames.GetInvolved}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={RouteNames.ContactUs}>Contact Us</JumpToButton>
            <JumpToButton to={RouteNames.Locations}>Locations</JumpToButton>
            <JumpToButton to={RouteNames.Schedules}>Schedules</JumpToButton>
        </RowFlex>
    );
};
