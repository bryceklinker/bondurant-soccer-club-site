import { FC, HTMLAttributes } from 'react';

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
    const classes = [
        italic ? 'italic' : '',
        bold ? 'font-bold' : '',
        indent ? 'pl-4' : '',
        className
    ].join(' ');
    return <p className={classes} {...props} />;
};
