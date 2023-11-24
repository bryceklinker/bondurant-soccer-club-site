import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { BulletedList } from '../../../common/components/BulletedList';
import { ListItem } from '../../../common/components/ListItem';

export const AdditionalExpectations: FC = () => {
    return (
        <>
            <SectionTitle className={'py-4'}>
                Additional Expectations
            </SectionTitle>

            <BulletedList>
                <ListItem>
                    Lead the Bondurant Academy Program as the Director of Academy Program Training.
                </ListItem>
                <ListItem>
                    Make key decisions and solicit feedback or approval from the Bondurant Soccer Club board when appropriate.
                </ListItem>
                <ListItem>Subscribe fully to the mission of the club.</ListItem>
                <ListItem>
                    Represent the club well within the community and beyond. Act with integrity, skill, and organization.
                </ListItem>
                <ListItem>
                    Work with the Academy Program Committee members to design milestones and curriculum for Academy players.  Focus on bridging the gap for these players from a U8 Recreational Player to a U11 Select Player.
                </ListItem>
                <ListItem>
                    Develop lesson plans for each session based on overall player development. Plans will need to be turned in prior to the season starting.  Director must be familiar with the lesson plans if the lesson plans are purchased from an outside source.
                </ListItem>
                <ListItem>
                    Provide training and share lesson plans to the recreation program. Drills need to be shared in a format that is easy to use for the coaches at that level. Roll out plan is as follows:  first season - academy u9/u10, 2nd season - academy/rec u9/u10, 3rd season - share with u7/u8, 4th season - share with u11/12.
                </ListItem>
                <ListItem>
                    Be the main coach to run practice/training during the season. Fall Season should start around mid-August and continue through the end of the season (early November).  Spring Season should start late March and continue through the end of the season (mid-June).  The expectation is for 2.5 practices a week. 3 sessions a week prior to games starting and then begin to reduce to 2 practices a week.
                </ListItem>
                <ListItem>
                    Manage skilled volunteer coaches to maximize effectiveness.  Coaching these coaches is a primary responsibility.
                </ListItem>
                <ListItem>
                    Provide training for the Academy Program coaches as well as recreation coaches.
                </ListItem>
            </BulletedList>
        </>
    );
};
