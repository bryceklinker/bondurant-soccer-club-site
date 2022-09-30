import React, { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import { Link } from 'gatsby';
import * as CSS from 'csstype';
import { RouteNames } from '../../common/routing/route-names';
import { RowFlex } from '../../common/layout/RowFlex';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
};

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({
    to,
    children
}) => {
    return (
        <Link
            to={to}
            className={
                'rounded-3xl p-8 m-4 text-xl shadow-xl bg-blue-700 text-white sm:h-24 md:h36 hover:brightness-90'
            }>
            <h3>{children}</h3>
        </Link>
    );
};

export const JumpToLinks: FunctionComponent = () => {
    return (
        <RowFlex
            className={
                'flex-none sm:gap-2 md:gap-4 sm:content-center md:content-center justify-center flex-wrap'
            }>
            <JumpToButton to={RouteNames.GetInvolved}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={RouteNames.ContactUs}>Contact Us</JumpToButton>
            <JumpToButton to={RouteNames.Locations}>Locations</JumpToButton>
            <JumpToButton to={RouteNames.Schedules}>Schedules</JumpToButton>
        </RowFlex>
    );
};
