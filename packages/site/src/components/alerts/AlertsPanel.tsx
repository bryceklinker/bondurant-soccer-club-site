import { FC, useMemo } from 'react';
import { Alert } from './Alert';
import { useAlerts } from './hooks/use-alerts';
import { ColumnFlex } from '../../common/layout/ColumnFlex';

export type AlertsPanelProps = {};

export const AlertsPanel: FC<AlertsPanelProps> = () => {
    const { alerts } = useAlerts();
    const alertItems = useMemo(
        () => alerts.map(m => <Alert key={m.id} model={m} />),
        [alerts]
    );
    return <ColumnFlex className={'flex-none'}>{alertItems}</ColumnFlex>;
};
