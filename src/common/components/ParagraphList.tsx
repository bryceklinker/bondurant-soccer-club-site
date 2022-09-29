import { FC } from 'react';
import { Paragraph } from './Paragraph';

export type ParagraphListProps = {
    numbered?: boolean;
    items: Array<string>;
};

export const ParagraphList: FC<ParagraphListProps> = ({ items, numbered }) => {
    const listItems = items.map((item, index) => (
        <Paragraph key={index} indent>
            {item}
        </Paragraph>
    ));

    if (numbered) {
        return <ol>{listItems}</ol>;
    }

    return <ul className={'list-none'}>{listItems}</ul>;
};
