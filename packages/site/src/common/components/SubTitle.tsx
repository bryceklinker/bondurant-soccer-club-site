import { FC, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type SubTitleProps = PropsWithChildren & {
    className?: string;
};

export const SubTitle: FC<SubTitleProps> = ({
    children,
    className,
    ...rest
}) => {
    const classes = ClassNames.join('font-bold', className);
    return (
        <h4 {...rest} className={classes}>
            {children}
        </h4>
    );
};
