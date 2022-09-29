import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { Spacer } from '../../components/Spacer';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';

import './LayoutFooter.css';

export type LayoutFooterProps = {};

export const LayoutFooter: FC<LayoutFooterProps> = () => {
    return (
        <RowFlex className={'footer p-2'} flex={'none'}>
            <Copyright />
            <Spacer vertical />
            <SocialMedia />
        </RowFlex>
    );
};
