import { FC, useCallback, useMemo, useState } from 'react';
import { Modal, ModalProps } from '../../common/components/modals/Modal';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import { AlertModel, AlertSeverity } from './state/models';
import { useForm } from 'react-hook-form';
import { AlertForm, AlertFormModel } from './AlertForm';
import { useCreateAlert } from './hooks/use-alerts';
import { Button, StyledButton } from '../../common/components/Button';
import { ModalTitle } from '../../common/components/modals/ModalTitle';

export type CreateAlertModalProps = Omit<ModalProps, 'children'>;

export const CreateAlertModal: FC<CreateAlertModalProps> = ({
    onClose,
    open
}) => {
    const { mutateAsync } = useCreateAlert();
    const [defaultValues, setDefaultValues] = useState<Omit<AlertModel, 'id'>>({
        text: '',
        severity: AlertSeverity.High
    });
    const { handleSubmit, formState, control } = useForm({ defaultValues });
    const onSubmit = handleSubmit(async (values: AlertFormModel) => {
        await mutateAsync(values);
        if (onClose) {
            onClose();
        }
    });
    const handleClose = useCallback(() => {
        setDefaultValues({ text: '', severity: AlertSeverity.High });
        if (onClose) {
            onClose();
        }
    }, [setDefaultValues]);

    return (
        <Modal open={open} onClose={handleClose}>
            <ModalTitle>Create Alert</ModalTitle>
            <ModalBody>
                <AlertForm
                    state={formState}
                    control={control}
                    onSubmit={onSubmit}
                />
            </ModalBody>
            <ModalActions>
                <StyledButton
                    color={'blue'}
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