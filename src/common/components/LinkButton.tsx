import { FunctionComponent, PropsWithChildren } from 'react';

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
    return (
        <a
            target={target}
            className={`hover:brightness-90 ${className}`}
            {...props}
        />
    );
};
