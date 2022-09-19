import {Button, VStack} from '@chakra-ui/react';
import {FC, PropsWithChildren, ReactNode} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';

export type CollapsiblePanelProps = PropsWithChildren & {
    title: string | ReactNode;
    expanded?: boolean;
}

export const CollapsiblePanel: FC<CollapsiblePanelProps> = ({children, title, expanded}) => {
    const {toggle} = useBooleanToggle(expanded || false);
    const {getToggleProps, getCollapseProps} = useCollapse({
        defaultExpanded: expanded || false
    });
    return (
        <VStack>
            {/* @ts-ignore */}
            <Button {...getToggleProps({
                onClick: () => toggle()
            })} className={'collapsible-button'}>
                {title}
            </Button>
            <div {...getCollapseProps()}>
                {children}
            </div>
        </VStack>
    );
};
