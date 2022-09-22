import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { Copyright, SocialMedia } from '../../../shell/components';
import { Spacer } from '../../components';

export type LayoutFooterProps = {};

export const LayoutFooter: FC<LayoutFooterProps> = () => {
    return (
        <RowFlex>
            <Copyright />
            <Spacer />
            <SocialMedia />
        </RowFlex>
    );
};
