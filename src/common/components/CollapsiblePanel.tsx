import {ActionButton, Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';
import './CollapsiblePanel.css';

interface CollapsiblePanelProps {
    title: string | React.ReactNode;
}

export const CollapsiblePanel: FunctionComponent<CollapsiblePanelProps> = ({children, title}) => {
    const {toggle} = useBooleanToggle();
    const {getToggleProps, getCollapseProps} = useCollapse();
    return (
        <Stack>
            {/* @ts-ignore */}
            <ActionButton {...getToggleProps({
                onClick: () => toggle()
            })} className={'collapsible-button'}>
                {title}
            </ActionButton>
            <div {...getCollapseProps()}>
                {children}
            </div>
        </Stack>
    );
};
