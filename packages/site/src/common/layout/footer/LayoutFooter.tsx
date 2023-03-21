import { FC } from 'react';
import { RowFlex } from '../RowFlex';
import { Spacer } from '../../components/Spacer';
import { Copyright } from './Copyright';
import { SocialMedia } from './SocialMedia';

export type LayoutFooterProps = {
    className?: string;
};

export const LayoutFooter: FC<LayoutFooterProps> = ({ className }) => {
    return (
        <RowFlex
            className={`bg-black text-white p-2 flex-none items-center hidden md:flex ${className}`}>
            <Copyright />
            <Spacer vertical />
            <SocialMedia />
        </RowFlex>
    );
};
