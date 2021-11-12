import React, {FunctionComponent} from 'react';
import {Text, ITextProps} from '@fluentui/react';

export interface ParagraphProps extends ITextProps {
    italic?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({italic, className, ...rest}) => {
    const classes = [
        italic ? 'italic-font' : '',
        className
    ].join(' ');
    return <Text as={'p'} variant={'large'} block className={classes} {...rest} />;
};
