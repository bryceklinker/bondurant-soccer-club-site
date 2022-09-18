import {FunctionComponent} from 'react';
import {CommandButton, DefaultButton, IContextualMenuItem, IContextualMenuProps} from '@fluentui/react';
import Link from 'next/link';
import {MORE_INFO_NAVIGATION_LINKS} from '../common';

function renderMenuItem(item: IContextualMenuItem, dismissMenu: (ev?: any, dismissAll?: boolean) => void) {
    const handleClick = () => {
        if (item.onClick) {
            item.onClick();
        }
        dismissMenu();
    };
    return (
        <Link href={item.href || ''} className={'nav-link'} onClick={handleClick} aria-label={item.text}>
            <DefaultButton className={'nav-button'}>
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
        className: 'nav-menu',
        calloutProps: {
          className: 'nav-menu-callout',
        },
        items: MORE_INFO_NAVIGATION_LINKS.map((l, i) => ({
            key: `${i}`,
            text: l.text,
            href: l.url,
            onClick,
            className: 'nav-menu-item',
            onRender: renderMenuItem
        }))
    }
    return (
        <CommandButton className={'nav-button command-button'} aria-label={'more nav button'} text={'More Info'} menuProps={menuProps} />
    )
}
