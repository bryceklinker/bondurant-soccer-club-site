import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GetInvolvedData, LinkData } from '../../common/state/models';
import { Paragraph } from '../../common/components/Paragraph';
import { ExternalLink } from '../../common/components/ExternalLink';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { ColumnFlex } from '../../common/layout/ColumnFlex';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { Section } from '../../common/components/Section';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({
    data
}) => {
    if (data.url.startsWith('http') || data.url.startsWith('mailto')) {
        return (
            <Paragraph>
                <ExternalLink href={data.url} target={'_blank'}>
                    {data.text}
                </ExternalLink>
            </Paragraph>
        );
    }

    return (
        <Paragraph>
            <GatsbyLink to={data.url}>{data.text}</GatsbyLink>
        </Paragraph>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({
    data
}) => {
    const links = data.links.map((l, i) => (
        <GetInvolvedLink data={l} key={i} />
    ));
    const description =
        typeof data.description === 'string' ? (
            <Paragraph>{data.description}</Paragraph>
        ) : (
            <data.description />
        );
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <ColumnFlex className={'gap-4'}>
                    {description}
                    <SubTitle>Links</SubTitle>
                    {links}
                </ColumnFlex>
            </CollapsiblePanel>
        </Section>
    );
};
