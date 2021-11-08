import React, {FunctionComponent} from 'react';
import {CommandButton, DefaultButton, IContextualMenuItem, IContextualMenuProps} from '@fluentui/react';
import {Link} from '@reach/router';
import {LinkData, RouteNames} from '../../common';
import './MoreNavbar.css';

const MORE_INFO_LINKS: Array<LinkData> = [
    {
        text: 'Registration Info',
        url: RouteNames.RegistrationInfo
    }
]

function renderMenuItem(item: IContextualMenuItem, dismissMenu: (ev?: any, dismissAll?: boolean) => void) {
    const handleClick = () => {
        if (item.onClick) {
            item.onClick();
        }
        dismissMenu();
    };
    return (
        <Link to={item.href || ''} className={'nav-link'} onClick={handleClick}>
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
        items: MORE_INFO_LINKS.map((l, i) => ({
            key: `${i}`,
            text: l.text,
            href: l.url,
            onClick,
            className: 'nav-menu-item',
            onRender: renderMenuItem
        }))
    }
    return (
        <CommandButton className={'nav-button command-button'} text={'More Info'} menuProps={menuProps} />
    )
}
