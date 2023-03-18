import { FC, useCallback, useMemo, useState } from 'react';
import { useAlerts } from './hooks/use-alerts';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { AlertsTable } from './AlertsTableProps';
import { AlertModel } from './state/models';
import { AlertModal } from './AlertModal';

export const AlertsPage: FC = () => {
    const { data, isLoading } = useAlerts();
    const alerts = useMemo(() => data ?? [], [data]);
    const [alertToEdit, setAlertToEdit] = useState<AlertModel | null>(null);
    const onEditAlert = useCallback(
        (alert: AlertModel) => {
            setAlertToEdit(alert);
        },
        [setAlertToEdit]
    );
    const onCloseAlertEdit = useCallback(() => {
        setAlertToEdit(null);
    }, [setAlertToEdit]);
    return (
        <ColumnFlex>
            <AlertsTable
                alerts={alerts}
                isLoading={isLoading}
                onEdit={onEditAlert}
            />
            {alertToEdit ? (
                <AlertModal
                    open={true}
                    alert={alertToEdit}
                    onClose={onCloseAlertEdit}
                />
            ) : null}
        </ColumnFlex>
    );
};
