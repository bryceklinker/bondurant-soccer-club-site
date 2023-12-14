import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { SubTitle } from '../../common/components/SubTitle';
import { BulletedList } from '../../common/components/BulletedList';
import { ListItem } from '../../common/components/ListItem';

export const U9AndUpSchedules: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>U9 and Up Schedules</SectionTitle>}>
                <SubTitle>
                    *&nbsp;Birth Years = 2014 through 2007&nbsp;*
                </SubTitle>
                <BulletedList>
                    <ListItem>
                        This schedule is set by Iowa Soccer schedule and will be
                        visible at the end March 2024.
                    </ListItem>
                    <ListItem>
                        Season for games will start the weekend of April 6th and
                        end the weekend of May 25th.
                    </ListItem>
                </BulletedList>
            </CollapsiblePanel>
        </Section>
    );
};
