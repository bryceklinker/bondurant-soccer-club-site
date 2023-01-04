import { FC, HTMLAttributes } from 'react';
import { ClassNames } from '../extensions/class-names';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
    italic?: boolean;
    bold?: boolean;
    indent?: boolean;
    className?: string;
};

export const Paragraph: FC<ParagraphProps> = ({
    italic,
    bold,
    indent,
    className,
    ...props
}) => {
    const classes = ClassNames.join(
        italic ? 'italic' : undefined,
        bold ? 'font-bold' : undefined,
        indent ? 'pl-4' : undefined,
        className
    );
    return <p className={classes} {...props} />;
};
