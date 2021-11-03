import React, {FunctionComponent} from 'react';
import {Link} from '@reach/router';
import {IStackProps, IStackTokens, ITheme, PrimaryButton, Stack} from '@fluentui/react';

import './JumpToLinks.css';

export interface JumpToButtonProps {
    to: string;
}

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({to, children}) => {
    return (
            <Link to={to}>
                <PrimaryButton className={'jump-link large-button'}>
                    {children}
                </PrimaryButton>
            </Link>
    );
};

export const JumpToLinks: FunctionComponent = () => {
    const tokens = (props: IStackProps, theme: ITheme): IStackTokens => {
        return {
            childrenGap: theme.spacing.l2
        };
    }
    return (
        <Stack horizontal horizontalAlign={'center'}  wrap tokens={tokens} className={'jump-link-container'}>
            <JumpToButton to={'get-involved'}>
                Get Involved
            </JumpToButton>
            <JumpToButton to={'contact-us'}>
                Contact Us
            </JumpToButton>
            <JumpToButton to={'about'}>
                About
            </JumpToButton>
            <JumpToButton to={'locations'}>
                Locations
            </JumpToButton>
        </Stack>
    );
};
