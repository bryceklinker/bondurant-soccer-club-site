import { FC, DetailedHTMLProps } from 'react';
import { Paragraph } from './Paragraph';

export type ExternalLinkProps = DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

export const ExternalLink: FC<ExternalLinkProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <Paragraph as={'span'} className={className}>
            <a target={'_blank'} {...rest}>
                {children}
            </a>
        </Paragraph>
    );
};
