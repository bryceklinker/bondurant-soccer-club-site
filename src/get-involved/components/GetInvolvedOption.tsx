import React, {FunctionComponent, useCallback, useState} from 'react';
import {GetInvolvedData} from '../state';
import {LinkData} from '../../common/state';
import {Section} from '../../common';
import {GroupedList} from '@fluentui/react';

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
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    const renderLink = useCallback((depth?: number, link?: LinkData, ) => {
        if (!link) return null;

        return <GetInvolvedLink data={link} />;
    }, []);
    return (
        <Section>
            <GroupedList items={data.links} onRenderCell={renderLink}>
                {/*<Accordion.Title active={isOpen} onClick={toggleOpen}>*/}
                {/*    <Header as={'h3'}>*/}
                {/*        <Icon name='dropdown' />*/}
                {/*        {data.title}*/}
                {/*    </Header>*/}
                {/*</Accordion.Title>*/}
                {/*<Accordion.Content active={isOpen}>*/}
                {/*    <p>{data.description}</p>*/}
                {/*    {*/}
                {/*        links.length > 0 ? links : null*/}
                {/*    }*/}
                {/*</Accordion.Content>*/}
            </GroupedList>
        </Section>
    );
};
