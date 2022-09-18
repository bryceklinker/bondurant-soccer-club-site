import React, {FunctionComponent} from 'react';
import {useBooleanToggle} from '../../common';
import {DefaultButton, Stack} from '@fluentui/react';
import { NavLinks } from './NavLinks';
import {MoreNavbar} from './MoreNavbar';

import styles from './ShellNavbar.module.css';
import {NavPanel} from './NavPanel';

export const ShellNavbar: FunctionComponent = () => {
    const {value, toggleOff, toggleOn} = useBooleanToggle();
    return (
        <>
            <NavPanel isOpen={value} onDismiss={toggleOff} hasCloseButton={false} isLightDismiss />
            <Stack as={'nav'} horizontal className={styles.navbar} horizontalAlign={'start'}>
                <DefaultButton className={`${styles.navButton} ${styles.navMenuButton}`}
                               onClick={toggleOn}
                               iconProps={{iconName: 'GlobalNavButton'}}/>
                <NavLinks onClick={toggleOff} />
                <MoreNavbar onClick={toggleOff} />
            </Stack>
        </>
    );
};
