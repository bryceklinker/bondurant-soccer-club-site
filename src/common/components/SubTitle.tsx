import { FC, PropsWithChildren } from 'react';

export type SubTitleProps = PropsWithChildren & {
    className?: string;
};

export const SubTitle: FC<SubTitleProps> = ({
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
