import { FC } from 'react';
import { Paragraph } from './Paragraph';
import { OrderedList, UnorderedList } from '@chakra-ui/react';

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
    const List = numbered ? OrderedList : UnorderedList;
    return <List>{listItems}</List>;
};
