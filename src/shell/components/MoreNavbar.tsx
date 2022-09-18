import React, {FunctionComponent} from 'react';
import {CommandButton, DefaultButton, IContextualMenuItem, IContextualMenuProps} from '@fluentui/react';
import Link from 'next/link';
import {MORE_INFO_NAVIGATION_LINKS} from '../../common';
import styles from './MoreNavbar.module.css';

function renderMenuItem(item: IContextualMenuItem, dismissMenu: (ev?: any, dismissAll?: boolean) => void) {
    const handleClick = () => {
        if (item.onClick) {
            item.onClick();
        }
        dismissMenu();
    };
    return (
        <Link href={item.href || ''} className={'nav-link'} onClick={handleClick} aria-label={item.text}>
            <DefaultButton className={styles.navButton}>
                {item.text}
            </DefaultButton>
        </Link>
    )
}

export interface MoreInfoLinksProps {
    onClick?: () => void;
}

export const MoreNavbar: FunctionComponent<MoreInfoLinksProps> = ({onClick}) => {
    const menuProps: IContextualMenuProps = {
        className: styles.navMenu,
        calloutProps: {
          className: styles.navMenuCallout,
        },
        items: MORE_INFO_NAVIGATION_LINKS.map((l, i) => ({
            key: `${i}`,
            text: l.text,
            href: l.url,
            onClick,
            className: styles.navMenuItem,
            onRender: renderMenuItem
        }))
    }
    return (
        <CommandButton className={'nav-button command-button'} aria-label={'more nav button'} text={'More Info'} menuProps={menuProps} />
    )
}
