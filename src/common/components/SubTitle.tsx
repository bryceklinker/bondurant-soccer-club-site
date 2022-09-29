import React, { FunctionComponent, PropsWithChildren } from 'react';

export type SubTitleProps = PropsWithChildren & {
    className?: string;
};

export const SubTitle: FunctionComponent<SubTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h4 {...rest} className={`font-bold ${className}`}>
            {children}
        </h4>
    );
};
