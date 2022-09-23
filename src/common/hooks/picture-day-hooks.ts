import { useMemo } from 'react';
import {
    PICTURES_ACCESS,
    PICTURES_COMPANY_LINK,
    PICTURES_DATE
} from '../state/picture-day';

export function usePicturesDate() {
    return useMemo(() => PICTURES_DATE, []);
}

export function usePicturesCompanyLink() {
    return useMemo(() => PICTURES_COMPANY_LINK, []);
}

export function usePicturesAccess() {
    return useMemo(() => PICTURES_ACCESS, []);
}
