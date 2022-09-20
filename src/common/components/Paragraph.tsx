import {FunctionComponent} from 'react';
import {Text, TextProps} from '@chakra-ui/react';

export interface ParagraphProps extends TextProps {
    italic?: boolean;
    bold?: boolean;
    indent?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({italic, bold, indent, className, ...rest}) => {
    const classes = [
        italic ? 'italic-font' : '',
        bold ? 'bold-font' : '',
        indent ? 'indent' : '',
        className
    ].join(' ');
    return <Text as={'p'} variant={'large'} className={classes} {...rest} />;
};
