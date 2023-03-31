import { FC, useMemo } from 'react';
import { Alert } from './Alert';
import { useAlerts } from './hooks/use-alerts';
import {RowFlex} from '../../common/layout/RowFlex';

export type AlertsPanelProps = {};

export const AlertsPanel: FC<AlertsPanelProps> = () => {
    const { alerts } = useAlerts();
    const alertItems = useMemo(
        () => alerts.map(m => <Alert key={m.id} model={m} />),
        [alerts]
    );
    return <RowFlex className={'flex-none'}>{alertItems}</RowFlex>;
};
