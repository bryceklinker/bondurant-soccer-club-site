import { FC, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type JumboTitleProps = PropsWithChildren & {
    className?: string;
};

export const JumboTitle: FC<JumboTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    const classes = ClassNames.join('text-2xl md:text-5xl', className);
    return (
        <h1 className={classes} {...rest}>
            {children}
        </h1>
    );
};
