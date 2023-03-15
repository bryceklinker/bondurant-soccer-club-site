import { FC, useCallback, useMemo, useState } from 'react';
import { RowFlex } from '../layout/RowFlex';
import { Alert } from './Alert';
import { useAlerts } from './hooks/use-alerts';
import { Button } from '../components/Button';
import { ColumnFlex } from '../layout/ColumnFlex';

export type AlertsPanelProps = {};

export const AlertsPanel: FC<AlertsPanelProps> = () => {
    const { result } = useAlerts();
    const models = result ?? [];
    const alerts = useMemo(
        () => models.map(m => <Alert key={m.id} model={m} />),
        [models]
    );
    return <ColumnFlex className={'flex-none'}>{alerts}</ColumnFlex>;
};
