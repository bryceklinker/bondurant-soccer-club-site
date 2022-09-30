import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'gatsby';
import { RouteNames } from '../../common/routing/route-names';
import { RowFlex } from '../../common/layout/RowFlex';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
};

export const JumpToButton: FC<JumpToButtonProps> = ({ to, children }) => {
    return (
        <Link
            to={to}
            aria-label={'jump link'}
            className={
                'rounded-3xl p-8 m-4 text-xl shadow-xl bg-blue-700 text-white sm:h-24 md:h36 hover:brightness-90'
            }>
            <h3>{children}</h3>
        </Link>
    );
};

export const JumpToLinks: FC = () => {
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
