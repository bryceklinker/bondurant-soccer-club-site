import React, { FunctionComponent } from 'react';
import { CollapsiblePanel, Section, SectionTitle } from '../common/components';
import { ExternalLinks } from '../common/components/ExternalLinks';
import { LinkData } from '../common/state';

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
