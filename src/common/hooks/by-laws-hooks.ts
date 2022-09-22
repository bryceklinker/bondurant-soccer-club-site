import { useMemo } from 'react';
import { BY_LAWS } from '../state';

export function useByLaws() {
    return useMemo(() => BY_LAWS, []);
}
