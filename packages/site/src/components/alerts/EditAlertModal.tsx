import { AlertModel, AlertModelSchema } from './state/models';
import {FC, useCallback, useMemo} from 'react';
import { Modal, ModalProps } from '../../common/components/modals/Modal';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import { useForm } from 'react-hook-form';
import { AlertForm, AlertFormModel } from './AlertForm';
import { StyledButton } from '../../common/components/Button';
import { useUpdateAlert } from './hooks/use-alerts';
import { zodResolver } from '@hookform/resolvers/zod';
import {Dates} from '../../common/extensions/dates';

export type AlertModalProps = ModalProps & {
    alert: AlertModel;
};
export const EditAlertModal: FC<AlertModalProps> = ({
    alert,
    open,
    onClose
}) => {
    const { mutateAsync } = useUpdateAlert();
    const defaultValues = useMemo<AlertModel>(() => ({
        ...alert,
        startDate: Dates.safeFormatForInput(alert.startDate),
        expirationDate: Dates.safeFormatForInput(alert.expirationDate)
    }), [alert]);
    const { control, handleSubmit, formState, reset } = useForm<AlertFormModel>({
        defaultValues,
        resolver: zodResolver(AlertModelSchema)
    });
    const onSubmit = handleSubmit(async (values: AlertFormModel) => {
        await mutateAsync({ ...values, id: alert.id });
        if (onClose) {
            onClose();
        }
    });
    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
        reset();
    }, [onClose, reset])
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
                <StyledButton
                    color={'primary'}
                    disabled={formState.isSubmitting}
                    onClick={onSubmit}
                    aria-label={'save button'}>
                    Save
                </StyledButton>
                <StyledButton
                    disabled={formState.isSubmitting}
                    onClick={handleClose}
                    aria-label={'cancel button'}>
                    Cancel
                </StyledButton>
            </ModalActions>
        </Modal>
    );
};
