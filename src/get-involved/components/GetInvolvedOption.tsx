import React, {FunctionComponent} from 'react';
import {GetInvolvedData} from '../state';
import {Section, LinkData, Paragraph, SectionTitle, SubTitle, Divider} from '../../common';
import {Link} from '@fluentui/react';
import './GetInvolvedOption.css';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({data}) => {
    return (
        <Link as={'a'}
              href={data.url}
              underline={false}
              target={'_blank'}>
            {data.text}
        </Link>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({data}) => {
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    return (
        <Section shadow padded className={'flex'}>
            <SectionTitle>{data.title}</SectionTitle>
            <Paragraph>{data.description}</Paragraph>
            <SubTitle>Links</SubTitle>
            {links}
        </Section>
    );
};
