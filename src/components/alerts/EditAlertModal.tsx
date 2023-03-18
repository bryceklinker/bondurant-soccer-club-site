import { AlertModel } from './state/models';
import { FC, useMemo } from 'react';
import { Modal, ModalProps } from '../../common/components/modals/Modal';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import { useForm } from 'react-hook-form';
import { AlertForm, AlertFormModel } from './AlertForm';
import { Button } from '../../common/components/Button';
import { useUpdateAlert } from './hooks/use-alerts';

export type AlertModalProps = ModalProps & {
    alert: AlertModel;
};
export const EditAlertModal: FC<AlertModalProps> = ({
    alert,
    open,
    onClose
}) => {
    const { mutateAsync } = useUpdateAlert();
    const defaultValues = useMemo(() => ({ ...alert }), [alert]);
    const { control, handleSubmit, formState } = useForm<AlertFormModel>({
        defaultValues
    });
    const onSubmit = handleSubmit(async (values: AlertFormModel) => {
        await mutateAsync({ ...values, id: alert.id });
        if (onClose) {
            onClose();
        }
    });
    return (
        <Modal open={open}>
            <ModalBody>
                <AlertForm
                    state={formState}
                    control={control}
                    onSubmit={onSubmit}
                />
            </ModalBody>
            <ModalActions>
                <Button
                    disabled={formState.isSubmitting}
                    onClick={onSubmit}
                    aria-label={'save button'}>
                    Save
                </Button>
                <Button
                    disabled={formState.isSubmitting}
                    onClick={onClose}
                    aria-label={'cancel button'}>
                    Cancel
                </Button>
            </ModalActions>
        </Modal>
    );
};
