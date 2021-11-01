import React from 'react';
import {Grid} from 'semantic-ui-react';
import {Headline, JumpToLinks, MissionStatement} from '../common';

import './index.css';

export const Index = () => {
    return (
        <div className={'content'}>
            <Headline/>

            <JumpToLinks />
        </div>
    );
};

export default Index;
