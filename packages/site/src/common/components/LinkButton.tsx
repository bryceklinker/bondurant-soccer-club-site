import { FunctionComponent, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type LinkButtonProps = PropsWithChildren & {
    href: string;
    external?: boolean;
    className?: string;
};

export const LinkButton: FunctionComponent<LinkButtonProps> = ({
    external,
    className,
    ...props
}) => {
    const target = external ? '_blank' : undefined;
    const classes = ClassNames.join('hover:brightness-90', className);
    return <a target={target} className={classes} {...props} />;
};
