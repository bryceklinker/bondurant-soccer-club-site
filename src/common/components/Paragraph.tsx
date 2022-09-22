import React, { FunctionComponent } from 'react';
import { Text, ITextProps } from '@fluentui/react';

export interface ParagraphProps extends ITextProps {
    italic?: boolean;
    bold?: boolean;
    indent?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
    italic,
    bold,
    indent,
    className,
    ...rest
}) => {
    const classes = [
        italic ? 'italic-font' : '',
        bold ? 'bold-font' : '',
        indent ? 'indent' : '',
        className
    ].join(' ');
    return (
        <Text as={'p'} variant={'large'} block className={classes} {...rest} />
    );
};
