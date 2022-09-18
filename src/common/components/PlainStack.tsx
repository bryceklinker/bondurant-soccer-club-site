import {FunctionComponent} from 'react';
import {IStackProps, Stack} from '@fluentui/react';

export interface PlainStackProps extends IStackProps {
    padded?: boolean;
    flex?: boolean;
    gap?: string | number;
}

export const PlainStack: FunctionComponent<PlainStackProps> = ({padded, flex, className, tokens, gap, ...rest}) => {
    const classes = [
        padded ? 'padded-content' : '',
        flex ? 'flex' : '',
        className
    ];
    const actualTokens = gap
        ? {...(tokens || {}), childrenGap: gap}
        : tokens;
    return <Stack className={classes.join(' ')} tokens={actualTokens} {...rest} />
}
