import { FC, PropsWithChildren } from 'react';

export type FlexProps = PropsWithChildren & {
    className?: string;
};

export const Flex: FC<FlexProps> = ({ className, ...props }) => {
    return <div className={`flex flex-1 ${className}`} {...props} />;
};
