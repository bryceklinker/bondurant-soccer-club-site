import React, {FunctionComponent} from 'react';
import {Headline} from './Headline';
import {JumpToLinks} from './JumpToLinks';

export const HomePage: FunctionComponent = () => {
    return (
        <div className={'content'}>
            <Headline/>

            <div className={'vertical-spacer'}/>

            <JumpToLinks/>
        </div>
    );
};
