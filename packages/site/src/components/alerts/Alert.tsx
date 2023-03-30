import { FC } from 'react';
import { RowFlex } from '../../common/layout/RowFlex';
import { AlertIcon } from './AlertIcon';
import { AlertModel } from './state/models';
import { Spacer } from '../../common/components/Spacer';

export type AlertProps = {
    model: AlertModel;
};
export const Alert: FC<AlertProps> = ({ model }) => {
    return (
        <RowFlex
            role={'alert'}
            className={
                'flex-none justify-start gap-2 bg-red-400 shadow-xl h-16 p-4'
            }>
            <AlertIcon status={model.severity} />
            {model.text}
        </RowFlex>
    );
};
