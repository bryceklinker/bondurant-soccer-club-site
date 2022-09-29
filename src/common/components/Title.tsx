import React, { FC, PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren & {
    className?: string;
};

export const Title: FC<TitleProps> = ({ className, ...rest }) => {
    return <h2 className={`font-bold text-3xl ${className}`} {...rest} />;
};
