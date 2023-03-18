import { useCallback, useState } from 'react';

export type ModalState = [boolean, () => void, () => void];
export function useModalState(open = false): ModalState {
    const [isOpen, setIsOpen] = useState(open);
    const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
    const onOpen = useCallback(() => setIsOpen(true), [setIsOpen]);
    return [isOpen, onClose, onOpen];
}
