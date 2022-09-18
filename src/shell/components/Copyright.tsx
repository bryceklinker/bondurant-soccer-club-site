import React, {FunctionComponent} from 'react';
import {Paragraph, useCurrentYear} from '../../common';
import styles from './Copyright.module.css';

export const Copyright: FunctionComponent = () => {
    const year = useCurrentYear();
    return (
        <Paragraph className={styles.copyright} aria-label={'copyright'}>
            © Bondurant Soccer Club {year}
        </Paragraph>
    )
}
