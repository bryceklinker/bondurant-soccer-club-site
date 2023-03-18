import { AlertModel } from './state/models';
import { FC, useMemo } from 'react';
import { Modal, ModalProps } from '../../common/components/modals/Modal';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import { useForm } from 'react-hook-form';
import { AlertForm } from './AlertForm';
import { Button } from '../../common/components/Button';
import { usePostAlert } from './hooks/use-alerts';

export type AlertModalProps = ModalProps & {
    alert: AlertModel;
};
export const AlertModal: FC<AlertModalProps> = ({ alert, open, onClose }) => {
    const { mutateAsync } = usePostAlert();
    const defaultValues = useMemo(() => ({ ...alert }), [alert]);
    const { control, handleSubmit, formState } = useForm({ defaultValues });
    const submitHandler = handleSubmit(async (values: AlertModel) => {
        await mutateAsync(values);
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
                    onSubmit={submitHandler}
                />
            </ModalBody>
            <ModalActions>
                <Button
                    disabled={formState.isSubmitting}
                    onClick={submitHandler}
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
