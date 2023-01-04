import { FC, PropsWithChildren } from 'react';
import { Paragraph } from './Paragraph';

export type ListItemProps = PropsWithChildren & {
    title?: string;
    className?: string;
};
export const ListItem: FC<ListItemProps> = ({ title, children, className }) => {
    return (
        <li>
            <Paragraph className={className}>
                {title && <span className={'font-bold'}>{title}:&nbsp;</span>}
                {children}
            </Paragraph>
        </li>
    );
};
