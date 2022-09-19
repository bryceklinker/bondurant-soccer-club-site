import {FunctionComponent} from 'react';
import {Paragraph} from './Paragraph';
import {ListItem, UnorderedList, OrderedList} from '@chakra-ui/react';

export interface ParagraphListProps {
    numbered?: boolean;
    items: Array<string>;
}

export const ParagraphList: FunctionComponent<ParagraphListProps> = ({items, numbered}) => {
    const listItems = items.map((item, index) => (
        <ListItem key={index}>
            <Paragraph indent>{item}</Paragraph>
        </ListItem>
    ));
    const List = numbered ? OrderedList : UnorderedList
    return (
        <List>
            {listItems}
        </List>
    )
}
