import {ActionButton, Stack} from '@fluentui/react';
import {FC, PropsWithChildren} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';

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
            })} className={'collapsible-button'}>
                {title}
            </ActionButton>
            <div {...getCollapseProps()}>
                {children}
            </div>
        </Stack>
    );
};
