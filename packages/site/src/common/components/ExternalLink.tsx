import { FC, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { Paragraph } from './Paragraph';

export type ExternalLinkProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

export const ExternalLink: FC<ExternalLinkProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <Paragraph className={className}>
            <a target={'_blank'} {...rest}>
                {children}
            </a>
        </Paragraph>
    );
};
