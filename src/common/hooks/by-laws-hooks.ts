import { useMemo } from 'react';
import { BY_LAWS } from '../state/by-laws';

export function useByLaws() {
    return useMemo(() => BY_LAWS, []);
}
