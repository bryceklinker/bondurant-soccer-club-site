import {FC} from 'react';
import {SubTitle} from '../../common/components/SubTitle';
import {Paragraph} from '../../common/components/Paragraph';
import {SmartLink} from '../../common/components/SmartLink';
import {COLLISON_SOCCER_PARK_LOCATION} from '../locations/state';
import {RouteNames} from '../../common/routing/route-names';
import {BulletedList} from '../../common/components/BulletedList';
import {ListItem} from '../../common/components/ListItem';

export type U7_U8ProgramDetailsProps = {
    includeDates?: boolean;
}

export const U7_U8ProgramDetails: FC<U7_U8ProgramDetailsProps> = ({includeDates = false}) => {
    return (
        <>
            <SubTitle>Birth Years = 2016,2017</SubTitle>
            <Paragraph>
                U7/U8 program will be all “in-house” meaning there will be no travel.
                All games will be at the <SmartLink link={{
                text: COLLISON_SOCCER_PARK_LOCATION.title,
                url: RouteNames.Locations
            }}/>.
            </Paragraph>

            <SubTitle>Details</SubTitle>
            <BulletedList>
                <ListItem>All BSC teams will be playing each other through our 8 week season</ListItem>
                <ListItem>No travel</ListItem>
                <ListItem>1&nbsp;-&nbsp;2 practices a week (coach discretion)</ListItem>
                <ListItem>Girls will have games on Saturday mornings between 11:00&nbsp;AM&nbsp;-&nbsp;1:00&nbsp;PM</ListItem>
                <ListItem>Boys will have games on Sunday afternoons between 12:00&nbsp;PM&nbsp;-&nbsp;3:00&nbsp;PM</ListItem>
                <ListItem>4&nbsp;-&nbsp;10 minute quarters</ListItem>
                {includeDates && <ListItem>Games will start the weekend of April 6th and end the weekend of May 25th.</ListItem>}
            </BulletedList>
        </>
    )
}
