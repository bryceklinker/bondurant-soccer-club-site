import React, {FunctionComponent, useCallback, useState} from 'react';
import {GetInvolvedData} from '../state';
import {Accordion, Header, Icon, List, Segment} from 'semantic-ui-react';
import {LinkData} from '../../common/state';

export interface GetInvolvedLinkProps {
    data: LinkData;
}

export const GetInvolvedLink: FunctionComponent<GetInvolvedLinkProps> = ({data}) => {
    return (
        <List.Item>
            <a href={data.url} target={'_blank'}>{data.text}</a>
        </List.Item>
    );
};

export interface GetInvolvedOptionProps {
    data: GetInvolvedData;
}

export const GetInvolvedOption: FunctionComponent<GetInvolvedOptionProps> = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);
    const links = data.links.map((l, i) => <GetInvolvedLink data={l} key={i}/>);
    return (
        <Segment>
            <Accordion>
                <Accordion.Title active={isOpen} onClick={toggleOpen}>
                    <Header as={'h3'}>
                        <Icon name='dropdown' />
                        {data.title}
                    </Header>
                </Accordion.Title>
                <Accordion.Content active={isOpen}>
                    <p>{data.description}</p>
                    {
                        links.length > 0 ? links : null
                    }
                </Accordion.Content>
            </Accordion>
        </Segment>
    );
};
