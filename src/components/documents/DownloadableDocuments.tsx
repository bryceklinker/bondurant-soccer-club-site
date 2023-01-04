import { FunctionComponent } from 'react';
import { ExternalLinks } from '../../common/components/ExternalLinks';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Section } from '../../common/components/Section';
import { LinkData } from '../../common/state/link-data';

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
