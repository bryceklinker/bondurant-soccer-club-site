import { FC, useCallback, useMemo, useState } from 'react';
import { RowFlex } from '../../common/layout/RowFlex';
import { Alert } from './Alert';
import { useAlerts } from './hooks/use-alerts';
import { Button } from '../../common/components/Button';
import { ColumnFlex } from '../../common/layout/ColumnFlex';

export type AlertsPanelProps = {};

export const AlertsPanel: FC<AlertsPanelProps> = () => {
    const { data } = useAlerts();
    const models = useMemo(() => (Array.isArray(data) ? data : []), [data]);
    const alerts = useMemo(
        () => models.map(m => <Alert key={m.id} model={m} />),
        [models]
    );
    return <ColumnFlex className={'flex-none'}>{alerts}</ColumnFlex>;
};
