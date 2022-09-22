import React, { FunctionComponent } from 'react';
import { Paragraph, useCurrentYear } from '../../index';

export const Copyright: FunctionComponent = () => {
    const year = useCurrentYear();
    return (
        <Paragraph className={'copyright'} aria-label={'copyright'}>
            © Bondurant Soccer Club {year}
        </Paragraph>
    );
};
