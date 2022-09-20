import {Button, Flex, Spacer} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons';
import {FC, PropsWithChildren, ReactNode} from 'react';
import useCollapse from 'react-collapsed';
import {useBooleanToggle} from '../hooks';

export type CollapsiblePanelProps = PropsWithChildren & {
    title: string | ReactNode;
    expanded?: boolean;
}

export const CollapsiblePanel: FC<CollapsiblePanelProps> = ({children, title, expanded}) => {
    const {toggle} = useBooleanToggle(expanded || false);
    const {getToggleProps, getCollapseProps, isExpanded} = useCollapse({
        defaultExpanded: expanded || false
    });
    return (
        <Flex flex={1} direction={'column'}>
            <Button size={'lg'} padding={0} className={'collapsible-button'} display={'flex'} flexDirection={'row'} variant={'unstyled'} justifyContent={'start'} backgroundColor={'white'} {...getToggleProps({
                onClick: () => toggle()
            })}>
                {title}
                <Spacer />
                {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Button>
            <Flex direction={'column'} flex={1} {...getCollapseProps()}>
                {children}
            </Flex>
        </Flex>
    );
};
