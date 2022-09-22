import { Button } from '@chakra-ui/react';
import useCollapse from 'react-collapsed';
import { FC, ReactNode } from 'react';
import { useBooleanToggle } from '../hooks';
import { ColumnFlex, ColumnFlexProps } from '../layout';

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
                })}>
                {title}
            </Button>
            <div {...getCollapseProps()}>{children}</div>
        </ColumnFlex>
    );
};
