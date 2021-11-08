import React, {FunctionComponent} from 'react';
import {Paragraph, useCurrentYear} from '../../common';

import './Copyright.css';
export const Copyright: FunctionComponent = () => {
    const year = useCurrentYear();
    return (
        <Paragraph className={'copyright'}>
            © Bondurant Soccer Club {year}
        </Paragraph>
    )
}
