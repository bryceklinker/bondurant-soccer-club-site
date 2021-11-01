import React, {FunctionComponent} from 'react';
import {ClubValue} from '../state/club-value';
import {Card, CardContent, CardHeader, Header} from 'semantic-ui-react';

export interface ClubValueComponentProps {
    clubValue: ClubValue;
}

import './ClubValueComponent.css';
export const ClubValueComponent: FunctionComponent<ClubValueComponentProps> = ({clubValue}) => {
    return (
        <Card centered>
            <CardHeader className={'value-header'}>
                <Header as={'h2'}>{clubValue.name}</Header>
            </CardHeader>
            <CardContent>
                <p>{clubValue.description}</p>
            </CardContent>
        </Card>
    )
}
