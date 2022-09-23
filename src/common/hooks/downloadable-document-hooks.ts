import { useMemo } from 'react';
import { DOWNLOADABLE_DOCUMENT_LINKS } from '../state/downloadable-documents';

export function useDownloadableDocuments() {
    return useMemo(() => DOWNLOADABLE_DOCUMENT_LINKS, []);
}
