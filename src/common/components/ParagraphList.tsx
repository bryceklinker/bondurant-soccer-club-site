import React, { FunctionComponent } from 'react';
import { List } from '@fluentui/react';
import { Paragraph } from './Paragraph';

export interface ParagraphListProps {
    numbered?: boolean;
    items: Array<string>;
}

export const ParagraphList: FunctionComponent<ParagraphListProps> = ({
    items,
    numbered
}) => {
    const onRenderCell = numbered
        ? (item?: string, index = 0) => (
              <Paragraph indent>
                  {index + 1}.&nbsp;{item}
              </Paragraph>
          )
        : (item?: string) => <Paragraph indent>{item}</Paragraph>;

    return <List items={items} onRenderCell={onRenderCell} />;
};
