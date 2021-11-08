import {ActionButton, Stack} from '@fluentui/react';
import React, {FunctionComponent} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';
import './CollapsiblePanel.css';

interface CollapsiblePanelProps {
    title: string | React.ReactNode;
    expanded?: boolean;
}

export const CollapsiblePanel: FunctionComponent<CollapsiblePanelProps> = ({children, title, expanded}) => {
    const {toggle} = useBooleanToggle(expanded || false);
    const {getToggleProps, getCollapseProps} = useCollapse({
        defaultExpanded: expanded || false
    });
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
