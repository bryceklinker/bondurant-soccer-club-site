import { FunctionComponent } from 'react';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';

export const Weather: FunctionComponent = () => {
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>Weather</SectionTitle>}>
                <Paragraph>
                    Games will be played when it is cold and when it is warm,
                    when it is wet and when it is dry. That's all the fun of
                    soccer in Iowa. If games need to be canceled, a message will
                    be put on Facebook and an email will be sent as soon as
                    possible. Due to trying to have as many games as possible,
                    it may be 5:00 PM before a game is canceled for the evening
                    or 8:30 AM for the morning. If the fields are closed or
                    tornado sirens going off, please know that all games are
                    canceled and do not wait for an email. Games that are
                    canceled are not made up unless otherwise noted at the time.
                    Seasonal weather may dictate how many games can be played in
                    a season.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
