import { FC, useCallback, useState } from 'react';
import { Modal } from '../../common/components/modals/Modal';
import { AlertModel } from './state/models';
import { ModalTitle } from '../../common/components/modals/ModalTitle';
import { ModalBody } from '../../common/components/modals/ModalBody';
import { ModalActions } from '../../common/components/modals/ModalActions';
import { IconButton, StyledButton } from '../../common/components/Button';
import { TrashIcon } from '@heroicons/react/20/solid';
import { useDeleteAlert } from './hooks/use-alerts';

export type DeleteAlertModalProps = {
    open: boolean;
    alert: AlertModel;
    onClose?: () => void;
};

export const DeleteAlertModal: FC<DeleteAlertModalProps> = ({
    open,
    alert,
    onClose
}) => {
    const { mutateAsync, isLoading } = useDeleteAlert();
    const onDelete = useCallback(async () => {
        await mutateAsync(alert);
        if (onClose) {
            onClose();
        }
    }, [mutateAsync, alert, onClose]);
    return (
        <Modal open={open} onClose={onClose}>
            <ModalTitle>Delete Alert?</ModalTitle>
            <ModalBody>Are you sure you want to delete this alert?</ModalBody>
            <ModalActions>
                <IconButton
                    onClick={onDelete}
                    disabled={isLoading}
                    className={'bg-red-500'}
                    aria-label={'delete alert'}
                    icon={<TrashIcon width={'1em'} />}>
                    Delete?
                </IconButton>
                <StyledButton
                    onClick={onClose}
                    disabled={isLoading}
                    aria-label={'cancel delete'}>
                    Cancel
                </StyledButton>
            </ModalActions>
        </Modal>
    );
};
