import React, {FunctionComponent, useCallback, useState} from 'react';
import {GetInvolvedData} from '../state';
import {Section, LinkData, SubTitle, Paragraph} from '../../common';
import {GroupedList} from '@fluentui/react';
import './GetInvolvedOption.css';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({data}) => {
    return (
            <a href={data.url} target={'_blank'}>{data.text}</a>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({data}) => {
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    return (
        <Section shadow className={'padded-content'}>
            <SubTitle>{data.title}</SubTitle>
            <Paragraph>{data.description}</Paragraph>
            {links}
        </Section>
    );
};
