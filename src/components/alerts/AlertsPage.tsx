import { FC, useMemo } from 'react';
import { useAlerts } from './hooks/use-alerts';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { AlertsTable } from './AlertsTableProps';

export const AlertsPage: FC = () => {
    const { data, isLoading } = useAlerts();
    const alerts = useMemo(() => data ?? [], [data]);
    return (
        <ColumnFlex>
            <AlertsTable alerts={alerts} isLoading={isLoading} />
        </ColumnFlex>
    );
};
