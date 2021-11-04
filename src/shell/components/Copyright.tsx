import React, {FunctionComponent} from 'react';
import {Paragraph} from '../../common';

import './Copyright.css';
export const Copyright: FunctionComponent = () => {
    return (
        <Paragraph className={'copyright'}>
            © Bondurant Soccer Club 2021
        </Paragraph>
    )
}
