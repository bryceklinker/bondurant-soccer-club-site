import { FC, PropsWithChildren } from 'react';

export type JumboTitleProps = PropsWithChildren & {
    className?: string;
};

export const JumboTitle: FC<JumboTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h1 className={`text-2xl md:text-5xl ${className}`} {...rest}>
            {children}
        </h1>
    );
};
