import { Button } from '@chakra-ui/react';
import useCollapse from 'react-collapsed';
import { FC, ReactNode } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { useBooleanToggle } from '../hooks/use-boolean-toggle';

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
    const { getToggleProps, getCollapseProps } = useCollapse({
        defaultExpanded: expanded || false
    });
    return (
        <ColumnFlex {...rest}>
            <Button
                {...getToggleProps({
                    onClick: () => toggle()
                })}
                colorScheme={'white'}
                color={'black'}
                alignSelf={'start'}
                paddingLeft={0}>
                {title}
            </Button>
            <div {...getCollapseProps()}>{children}</div>
        </ColumnFlex>
    );
};
