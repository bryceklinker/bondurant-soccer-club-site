import React from 'react';
import {Headline, JumpToLinks} from '../common';

import './index.css';

export const Index = () => {
    return (
        <div className={'content'}>
            <Headline/>

            <div className={'vertical-spacer'}/>

            <JumpToLinks/>
        </div>
    );
};

export default Index;
