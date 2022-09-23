import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { Spacer } from '../../components/Spacer';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';

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
