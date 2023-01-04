import { FC } from 'react';
import { Paragraph } from './Paragraph';
import { ClassNames } from '../extensions/class-names';

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

    const classes = ClassNames.join('flex flex-col gap-2');
    if (numbered) {
        return <ol className={classes}>{listItems}</ol>;
    }

    return (
        <ul className={ClassNames.join('list-none', classes)}>{listItems}</ul>
    );
};
