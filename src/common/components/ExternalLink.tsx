import {FunctionComponent} from 'react';
import {LinkProps, Link} from '@chakra-ui/react';
import {Paragraph} from './Paragraph';

interface ExternalLinkProps extends Omit<LinkProps, 'target'> {
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = ({children, className, ...rest}) => {
    return (
        <Paragraph as={'span'} className={className}>
            <Link target={'_blank'} {...rest}>
                {children}
            </Link>
        </Paragraph>
    );
};
