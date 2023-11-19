import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal, ModalProps } from '../../common/components/modals/Modal';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import {
    AlertSeverity,
    CreateAlertModel,
    CreateAlertModelSchema
} from './state/models';
import { AlertForm, AlertFormModel } from './AlertForm';
import { useCreateAlert } from './hooks/use-alerts';
import { StyledButton } from '../../common/components/Button';
import { ModalTitle } from '../../common/components/modals/ModalTitle';

export type CreateAlertModalProps = Omit<ModalProps, 'children'>;

export const CreateAlertModal: FC<CreateAlertModalProps> = ({
    onClose,
    open
}) => {
    const { mutateAsync } = useCreateAlert();
    const [defaultValues, setDefaultValues] = useState<CreateAlertModel>({
        text: '',
        severity: AlertSeverity.High,
        expirationDate: '',
        startDate: ''
    });
    const { handleSubmit, formState, control, reset } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        defaultValues,
        resolver: zodResolver(CreateAlertModelSchema)
    });
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
        reset();
    }, [setDefaultValues, reset, onClose]);

    return (
        <Modal open={open} onClose={handleClose}>
            <ModalTitle>Create Alert</ModalTitle>
            <ModalBody>
                <AlertForm
                    disabled={formState.isSubmitting}
                    state={formState}
                    control={control}
                    onSubmit={onSubmit}
                />
            </ModalBody>
            <ModalActions>
                <StyledButton
                    color={'primary'}
                    disabled={formState.isSubmitting || !formState.isValid}
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
