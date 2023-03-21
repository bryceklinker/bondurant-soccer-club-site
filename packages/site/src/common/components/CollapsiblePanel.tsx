import { FC, ReactNode, useMemo } from 'react';
import { ColumnFlex, ColumnFlexProps } from '../layout/ColumnFlex';
import { RowFlex } from '../layout/RowFlex';
import { Disclosure, Transition } from '@headlessui/react';
import { Button } from './Button';
import { Spacer } from './Spacer';
import { useBooleanToggle } from '../hooks/use-boolean-toggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

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
    const { toggle, value } = useBooleanToggle(expanded || false);
    const PanelIcon = useMemo(
        () => (value ? ChevronUpIcon : ChevronDownIcon),
        [value]
    );
    return (
        <Disclosure {...rest} defaultOpen={expanded}>
            <Disclosure.Button
                as={Button}
                onClick={toggle}
                className={'w-full self-start pl-0'}>
                <RowFlex className={'items-center mb-4'}>
                    {title}
                    <Spacer />
                    <PanelIcon className={'h-6 w-6'} />
                </RowFlex>
            </Disclosure.Button>
            <Transition
                enter={'transition duration-100 ease-out'}
                enterFrom={'transform h-95 opacity-0'}
                enterTo={'transform h-100 opacity-100'}
                leave={'transition duration-75 ease-out'}
                leaveFrom={'transform h-100 opacity-100'}
                leaveTo={'transform h-95 opacity-0'}>
                <Disclosure.Panel>
                    <ColumnFlex className={'gap-4'}>{children}</ColumnFlex>
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    );
};
