import {useMemo} from 'react';
import {GET_INVOLVED_OPTIONS} from '../state/get-involved';

export function useGetInvolvedOptions() {
    return useMemo(() => GET_INVOLVED_OPTIONS, []);
}

