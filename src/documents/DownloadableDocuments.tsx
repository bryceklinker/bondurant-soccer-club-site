import { FunctionComponent } from 'react';
import { ExternalLinks } from '../common/components/ExternalLinks';
import { LinkData } from '../common/state/models';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { SectionTitle } from '../common/components/SectionTitle';
import { Section } from '../common/components/Section';

export interface DownloadableDocumentsProps {
    documentLinks: Array<LinkData>;
}

export const DownloadableDocuments: FunctionComponent<
    DownloadableDocumentsProps
> = ({ documentLinks }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>Downloadable Documents</SectionTitle>}>
                <ExternalLinks links={documentLinks} />
            </CollapsiblePanel>
        </Section>
    );
};
