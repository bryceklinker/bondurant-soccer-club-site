import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { Spacer } from '../../components/Spacer';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';

export type LayoutFooterProps = {};

export const LayoutFooter: FC<LayoutFooterProps> = () => {
    return (
        <RowFlex className={'bg-black text-white p-2 flex-none items-center'}>
            <Copyright />
            <Spacer vertical />
            <SocialMedia />
        </RowFlex>
    );
};
