import React, {FunctionComponent} from 'react';
import {Link} from '@reach/router';
import {PrimaryButton, Stack} from '@fluentui/react';

import './JumpToLinks.css';

export interface JumpToButtonProps {
    to: string;
}

export const JumpToButton: FunctionComponent<JumpToButtonProps> = ({to, children}) => {
    return (
        <div className={'jump-link-container'}>
            <Link to={to}>
                <PrimaryButton className={'jump-link'}>
                    {children}
                </PrimaryButton>
            </Link>
        </div>

    );
};

export const JumpToLinks: FunctionComponent = () => {
    return (
        <Stack horizontal horizontalAlign={'center'} wrap>
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
