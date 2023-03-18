import { FC } from 'react';
import { RowFlex } from '../layout/RowFlex';

export type LoadingProps = {
    text?: string;
};

export const Loading: FC<LoadingProps> = ({ text }) => {
    return (
        <RowFlex>
            <div
                role={'progressbar'}
                className={
                    'w-12 h-12 rounded-full animate-spin border border-solid border-blue-600 border-t-transparent'
                }
            />
            {text ? text : null}
        </RowFlex>
    );
};
