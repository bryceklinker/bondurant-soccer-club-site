import useCollapse from 'react-collapsed';
import { FC, ReactNode, useMemo } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { useBooleanToggle } from '../hooks/use-boolean-toggle';
import { RowFlex } from '../layout/RowFlex';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import { Button } from './Button';
import { Spacer } from './Spacer';

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
                className={'w-full self-start pl-0'}>
                <RowFlex className={'items-center mb-4'}>
                    {title}
                    <Spacer />
                    <PanelIcon className={'h-6 w-6'} />
                </RowFlex>
            </Button>
            <div {...getCollapseProps()}>{children}</div>
        </ColumnFlex>
    );
};
