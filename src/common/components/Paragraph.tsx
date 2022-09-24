import { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export interface ParagraphProps extends TextProps {
    italic?: boolean;
    bold?: boolean;
    indent?: boolean;
}

export const Paragraph: FC<ParagraphProps> = ({
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
