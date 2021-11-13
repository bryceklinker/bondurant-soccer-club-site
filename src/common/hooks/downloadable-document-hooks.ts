import {DOWNLOADABLE_DOCUMENT_LINKS} from '../state';
import {useMemo} from 'react';

export function useDownloadableDocuments() {
    return useMemo(() => DOWNLOADABLE_DOCUMENT_LINKS, []);
}
