import {FunctionComponent} from 'react';
import {CollapsiblePanel, LinkData, Section, SectionTitle} from '../common';
import {ExternalLinks} from '../common/components/ExternalLinks';

export interface DownloadableDocumentsProps {
    documentLinks: Array<LinkData>;
}

export const DownloadableDocuments: FunctionComponent<DownloadableDocumentsProps> = ({documentLinks}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Downloadable Documents</SectionTitle>}>
                <ExternalLinks links={documentLinks} />
            </CollapsiblePanel>
        </Section>
    )
}
