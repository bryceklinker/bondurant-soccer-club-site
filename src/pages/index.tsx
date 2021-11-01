import React from 'react';
import {Headline, JumpToLinks} from '../common';

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
