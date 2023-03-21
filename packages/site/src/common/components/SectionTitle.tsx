import { FunctionComponent, PropsWithChildren } from 'react';
import { ClassNames } from '../extensions/class-names';

export type SectionTitleProps = PropsWithChildren & {
    className?: string;
};

export const SectionTitle: FunctionComponent<SectionTitleProps> = ({
    className,
    ...rest
}) => {
    const classes = ClassNames.join('font-bold text-xl', className);
    return <h4 className={classes} {...rest} />;
};
