import { FC } from 'react';
import { SectionTitle } from '../../../common/components/SectionTitle';
import { BulletedList } from '../../../common/components/BulletedList';
import { ListItem } from '../../../common/components/ListItem';

export const RequirementsAndQualifications: FC = () => {
    return (
        <>
            <SectionTitle className={'py-4'}>
                Requirements and Qualifications
            </SectionTitle>

            <BulletedList>
                <ListItem>
                    Current U.S. Soccer D or higher License or plan to attain
                    within 6 months with some flexibility due to scheduling
                    available
                </ListItem>
                <ListItem>
                    Positive leadership and management skills, including the
                    ability to attract, develop, motivate, and retain staff and
                    volunteers
                </ListItem>
                <ListItem>
                    Previous experience working at the youth soccer level
                </ListItem>
                <ListItem>
                    Demonstrated coaching ability at all ages and levels of play
                </ListItem>
                <ListItem>
                    A positive tenure in club or association management
                    preferred
                </ListItem>
                <ListItem>
                    Proficient in Microsoft Office Suite: Outlook, Word, Excel,
                    and PowerPoint
                </ListItem>
                <ListItem>
                    Tech savvy and able to quickly learn and use new software
                </ListItem>
                <ListItem>
                    Detail-oriented, with the ability to manage multiple
                    priorities at once
                </ListItem>
                <ListItem>
                    Positive interpersonal and communication skills
                </ListItem>
                <ListItem>
                    Familiarity with social media platforms and leadership of
                    team management software
                </ListItem>
            </BulletedList>
        </>
    );
};
