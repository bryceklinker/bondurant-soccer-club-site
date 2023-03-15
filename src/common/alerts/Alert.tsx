import { FC, useCallback, useState } from 'react';
import { RowFlex } from '../layout/RowFlex';
import { AlertIcon } from './AlertIcon';
import { AlertModel } from './state/models';
import { Button } from '../components/Button';
import { Spacer } from '../components/Spacer';

export type AlertProps = {
    model: AlertModel;
};
export const Alert: FC<AlertProps> = ({ model }) => {
    return (
        <RowFlex
            role={'alert'}
            className={
                'flex-none justify-center gap-2 bg-red-400 shadow h-16 p-4'
            }>
            <AlertIcon status={model.status} />
            {model.text}
            <Spacer />
        </RowFlex>
    );
};
