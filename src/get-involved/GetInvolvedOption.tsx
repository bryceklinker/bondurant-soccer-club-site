import React, {FunctionComponent} from 'react';
import {Section, LinkData, Paragraph, SectionTitle, SubTitle, CollapsiblePanel, GetInvolvedData} from '../common';
import {Link as ExternalLink, Stack} from '@fluentui/react';
import {Link as PageLink} from '@reach/router';
import './GetInvolvedOption.css';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({data}) => {
    if (data.url.startsWith('http') || data.url.startsWith('mailto')) {
        return (
            <Paragraph>
                <ExternalLink as={'a'}
                              href={data.url}
                              underline={false}
                              target={'_blank'}>
                    {data.text}
                </ExternalLink>
            </Paragraph>
        );
    }


    return (
        <Paragraph>
            <PageLink to={data.url}>
                {data.text}
            </PageLink>
        </Paragraph>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({data}) => {
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    const description = typeof data.description === 'string'
        ? <Paragraph>{data.description}</Paragraph>
        : <data.description />
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>{data.title}</SectionTitle>}>
                <Stack>
                    {description}
                    <SubTitle>Links</SubTitle>
                    {links}
                </Stack>
            </CollapsiblePanel>
        </Section>
    );
};
