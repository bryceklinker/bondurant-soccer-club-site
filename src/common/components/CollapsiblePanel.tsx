import {ActionButton, Stack} from '@fluentui/react';
import React, {FC, PropsWithChildren} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';
import styles from './CollapsiblePanel.module.css';

export type CollapsiblePanelProps = PropsWithChildren & {
    title: string | React.ReactNode;
    expanded?: boolean;
}

export const CollapsiblePanel: FC<CollapsiblePanelProps> = ({children, title, expanded}) => {
    const {toggle} = useBooleanToggle(expanded || false);
    const {getToggleProps, getCollapseProps} = useCollapse({
        defaultExpanded: expanded || false
    });
    return (
        <Stack>
            {/* @ts-ignore */}
            <ActionButton {...getToggleProps({
                onClick: () => toggle()
            })} className={styles.collapsibleButton}>
                {title}
            </ActionButton>
            <div {...getCollapseProps()}>
                {children}
            </div>
        </Stack>
    );
};
