import { FC } from 'react';
import { SubTitle } from '../../common/components/SubTitle';
import { BulletedList } from '../../common/components/BulletedList';
import { ListItem } from '../../common/components/ListItem';
import { Paragraph } from '../../common/components/Paragraph';

export type U5_U6DetailsProps = {
    includeDates?: boolean;
};

export const U5_U6Details: FC<U5_U6DetailsProps> = ({
    includeDates = false
}) => {
    return (
        <>
            <SubTitle>*&nbsp;Birth Years = 2018,2019&nbsp;*</SubTitle>

            {includeDates && (
                <Paragraph>
                    Start date - Saturday, April 27
                    <br />
                    End date - Thursday, May 23
                </Paragraph>
            )}
            <BulletedList>
                <ListItem>All BSC teams will play each other</ListItem>
                <ListItem>All games, no practices</ListItem>
                <ListItem>6&nbsp;-&nbsp;6 minute quarters</ListItem>
            </BulletedList>

            <Paragraph>
                Games will be on Tuesdays, Thursdays, and Satudays
            </Paragraph>

            <Paragraph>
                U5 plays on Tuesdays = 6:00&nbsp;-&nbsp;6:45&nbsp;PM
            </Paragraph>
            <Paragraph>
                U6 plays on Thursdays = 6:00&nbsp;-&nbsp;6:45&nbsp;PM
            </Paragraph>
            <Paragraph>
                U5 plays on Saturdays = 8:30&nbsp;-&nbsp;9:15&nbsp;AM
            </Paragraph>
            <Paragraph>
                U6 plays on Saturdays = 9:45&nbsp;-&nbsp;10:30&nbsp;AM
            </Paragraph>
        </>
    );
};
