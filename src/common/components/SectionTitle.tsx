import { FunctionComponent, PropsWithChildren } from 'react';

export type SectionTitleProps = PropsWithChildren & {
    className?: string;
};

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    className,
    ...rest
}) => {
    return <h4 className={`font-bold text-xl ${className}`} {...rest} />;
};
