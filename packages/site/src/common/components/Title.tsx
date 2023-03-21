import React, { FC, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type TitleProps = PropsWithChildren & {
    className?: string;
};

export const Title: FC<TitleProps> = ({ className, ...rest }) => {
    const classes = ClassNames.join('font-bold text-3xl', className);
    return <h2 className={classes} {...rest} />;
};
