import { FC, useCallback, useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useAlerts } from './hooks/use-alerts';
import { AlertsTable } from './AlertsTable';
import { AlertModel } from './state/models';
import { EditAlertModal } from './EditAlertModal';
import { Spacer } from '../../common/components/Spacer';
import { RowFlex } from '../../common/layout/RowFlex';
import { IconButton } from '../../common/components/Button';
import { useModalState } from '../../common/hooks/use-modal-state';
import { CreateAlertModal } from './CreateAlertModal';
import { useIsLoggedIn } from '../../common/auth/auth-hooks';
import { Section } from '../../common/components/Section';
import { Unauthorized } from '../../common/auth/Unauthorized';

export const AlertsPage: FC = () => {
    const isLoggedIn = useIsLoggedIn();
    const { alerts, isLoading } = useAlerts();
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

    if (!isLoggedIn) {
        return <Unauthorized />;
    }
    return (
        <Section className={'p-8 h-full gap-2'}>
            <RowFlex className={'flex-none'}>
                <Spacer />
                <IconButton
                    onClick={onOpenCreate}
                    color={'blue'}
                    icon={<PlusIcon width={'1em'} />}
                    className={'p-2 rounded'}
                    aria-label={'create alert'}>
                    Add&nbsp;Alert
                </IconButton>
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
        </Section>
    );
};
