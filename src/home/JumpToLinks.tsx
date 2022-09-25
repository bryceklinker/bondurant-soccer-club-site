import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { Link } from 'gatsby';
import * as CSS from 'csstype';
import { Button, ResponsiveValue } from '@chakra-ui/react';
import { RouteNames } from '../common/routing/route-names';
import { RowFlex } from '../common/layout/RowFlex';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
};

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({
    to,
    children
}) => {
    const size = useMemo<ResponsiveValue<CSS.Property.Height>>(
        () => ({
            base: '6em',
            lg: '9em'
        }),
        []
    );
    const borderRadius = useMemo<ResponsiveValue<CSS.Property.BorderRadius>>(
        () => ({
            base: '3em',
            lg: '4.5em'
        }),
        []
    );
    return (
        <Link to={to}>
            <Button
                height={size}
                width={size}
                borderRadius={borderRadius}
                boxShadow={'4px 4px 4px dimgray'}
                className={'large-button'}
                colorScheme={'blue'}
                aria-label={'jump link'}>
                {children}
            </Button>
        </Link>
    );
};

export const JumpToLinks: FunctionComponent = () => {
    const alignContent = useMemo<ResponsiveValue<CSS.Property.AlignContent>>(
        () => ({
            base: 'center',
            md: 'start'
        }),
        []
    );
    const gap = useMemo<ResponsiveValue<CSS.Property.Gap>>(
        () => ({
            base: '0.5em',
            md: '1em'
        }),
        []
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
