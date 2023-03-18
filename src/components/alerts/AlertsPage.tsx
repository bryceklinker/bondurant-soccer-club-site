import { FC, useCallback, useMemo, useState } from 'react';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { useAlerts } from './hooks/use-alerts';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { AlertsTable } from './AlertsTableProps';
import { AlertModel } from './state/models';
import { EditAlertModal } from './EditAlertModal';
import { Spacer } from '../../common/components/Spacer';
import { RowFlex } from '../../common/layout/RowFlex';
import { Button } from '../../common/components/Button';
import { useModalState } from '../../common/hooks/use-modal-state';
import { CreateAlertModal } from './CreateAlertModal';

export const AlertsPage: FC = () => {
    const { data, isLoading } = useAlerts();
    const alerts = useMemo(() => data ?? [], [data]);
    const [isCreatingAlert, onCloseCreate, onOpenCreate] = useModalState();
    const [isEditingAlert, onCloseEdit, onOpenEdit] = useModalState();
    const [alertToEdit, setAlertToEdit] = useState<AlertModel | null>(null);
    const onEditAlert = useCallback(
        (alert: AlertModel) => {
            setAlertToEdit(alert);
            onOpenEdit();
        },
        [setAlertToEdit, onOpenEdit]
    );
    const onCloseAlertEdit = useCallback(() => {
        setAlertToEdit(null);
        onCloseEdit();
    }, [setAlertToEdit, onCloseEdit]);
    return (
        <ColumnFlex>
            <RowFlex>
                <Spacer />
                <Button onClick={onOpenCreate} aria-label={'create alert'}>
                    <PlusIcon />
                    Add Alert
                </Button>
            </RowFlex>
            <AlertsTable
                alerts={alerts}
                isLoading={isLoading}
                onEdit={onEditAlert}
            />
            {isEditingAlert && alertToEdit ? (
                <EditAlertModal
                    open={true}
                    alert={alertToEdit}
                    onClose={onCloseAlertEdit}
                />
            ) : null}
            <CreateAlertModal open={isCreatingAlert} onClose={onCloseCreate} />
        </ColumnFlex>
    );
};
