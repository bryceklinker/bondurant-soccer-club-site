import {FC, PropsWithChildren} from 'react';
import Link from 'next/link';
import {IStackProps, IStackTokens, ITheme, PrimaryButton, Stack} from '@fluentui/react';
import {RouteNames} from '../common';

export type JumpToButtonProps = PropsWithChildren & {
    to: string;
}

export const JumpToButton: FC<JumpToButtonProps> = ({to, children}) => {
    return (
            <Link href={to}>
                <PrimaryButton className={`jump-link large-button`} aria-label={'jump link'}>
                    {children}
                </PrimaryButton>
            </Link>
    );
};

export const JumpToLinks: FC = () => {
    const tokens = (props: IStackProps, theme: ITheme): IStackTokens => {
        return {
            childrenGap: theme.spacing.l2
        };
    }
    return (
        <Stack horizontal horizontalAlign={'center'}  wrap tokens={tokens} className={'jump-link-container'}>
            <JumpToButton to={RouteNames.GetInvolved}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={RouteNames.ContactUs}>
                Contact Us
            </JumpToButton>
            <JumpToButton to={RouteNames.Locations}>
                Locations
            </JumpToButton>
            <JumpToButton to={RouteNames.Schedules}>
                Schedules
            </JumpToButton>
        </Stack>
    );
};