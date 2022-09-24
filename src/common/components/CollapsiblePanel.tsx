import { Button, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import useCollapse from 'react-collapsed';
import { FC, ReactNode, useMemo } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { useBooleanToggle } from '../hooks/use-boolean-toggle';
import { RowFlex } from '../layout/RowFlex';

export type CollapsiblePanelProps = Omit<ColumnFlexProps, 'title'> & {
    title: string | ReactNode;
    expanded?: boolean;
};

export const CollapsiblePanel: FC<CollapsiblePanelProps> = ({
    children,
    title,
    expanded,
    ...rest
}) => {
    const { toggle } = useBooleanToggle(expanded || false);
    const { getToggleProps, getCollapseProps, isExpanded } = useCollapse({
        defaultExpanded: expanded || false
    });
    const PanelIcon = useMemo(
        () => (isExpanded ? ChevronUpIcon : ChevronDownIcon),
        [isExpanded]
    );
    return (
        <ColumnFlex {...rest}>
            <Button
                {...getToggleProps({
                    onClick: () => toggle()
                })}
                width={'100%'}
                colorScheme={'white'}
                color={'black'}
                alignSelf={'start'}
                paddingLeft={0}>
                <RowFlex alignItems={'center'} marginBottom={'1em'}>
                    {title}
                    <Spacer />
                    <PanelIcon fontSize={'2em'} />
                </RowFlex>
            </Button>
            <div {...getCollapseProps()}>{children}</div>
        </ColumnFlex>
    );
};
