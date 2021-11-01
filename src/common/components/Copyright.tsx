import React, {FunctionComponent} from 'react';
import {Header} from 'semantic-ui-react';

export const Copyright: FunctionComponent = () => {
    return (
        <Header as={'h5'} inverted>
            © Bondurant Soccer Club 2021
        </Header>
    )
}
