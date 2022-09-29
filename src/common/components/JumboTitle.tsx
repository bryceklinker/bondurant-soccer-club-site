import { FunctionComponent, PropsWithChildren } from 'react';
import './JumboTitle.css';

export type JumboTitleProps = PropsWithChildren & {
    className?: string;
};

export const JumboTitle: FunctionComponent<JumboTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <h1 className={`jumbo-title ${className}`} {...rest}>
            {children}
        </h1>
    );
};
