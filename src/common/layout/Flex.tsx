import { FC, PropsWithChildren } from 'react';

export type FlexProps = PropsWithChildren & {
    flex?: 1 | 'initial' | 'none';
    direction: 'row' | 'col';
    className?: string;
};

export const Flex: FC<FlexProps> = ({
    flex = 1,
    direction,
    className,
    ...props
}) => {
    return (
        <div
            className={`flex flex-${direction} flex-${flex} ${className}`}
            {...props}
        />
    );
};
