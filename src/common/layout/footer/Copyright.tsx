import React, { FunctionComponent } from 'react';
import { useCurrentYear } from '../../hooks/use-current-year';
import { Paragraph } from '../../components/Paragraph';

export const Copyright: FunctionComponent = () => {
    const year = useCurrentYear();
    return (
        <Paragraph className={'copyright'} aria-label={'copyright'}>
            © Bondurant Soccer Club {year}
        </Paragraph>
    );
};
