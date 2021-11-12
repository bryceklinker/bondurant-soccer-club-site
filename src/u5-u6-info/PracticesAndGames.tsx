import React, {FunctionComponent} from 'react';
import {CollapsiblePanel, LinkData, Paragraph, Section, SectionTitle} from '../common';
import {Link} from '@reach/router';

export interface PracticesAndGamesProps {
    schedulesLink: LinkData;
}

export const PracticesAndGames: FunctionComponent<PracticesAndGamesProps> = ({schedulesLink}) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Practices & Games</SectionTitle>}>
                <Paragraph>
                    U5 - Tuesdays 6-6:45 & Saturdays 8:30-9:15
                </Paragraph>

                <Paragraph>
                    U6 - Thursdays 6-6:45 & Saturdays 9:45-10:30
                </Paragraph>

                <Paragraph>
                    Access this season's schedule here: <Link to={schedulesLink.url}>{schedulesLink.text}</Link>
                </Paragraph>

                <Paragraph>
                    At the start of each game, there will be 10-15 minutes if basic drills and learning different
                    plays. The players then take about a 5-minute break, then begin their game.
                </Paragraph>

                <Paragraph>
                    The game is 6 six-minute quarters with a 6-minute halftime. Players are usually swapped in and
                    out every 3 minutes. There is no 'goalie/keeper' at this age. All players are to try to get a
                    goal and all are to help defend their goal.
                </Paragraph>

                <Paragraph>
                    Due to COVID-19 precautions: instead of throw in's, we will be doing kick in's. Trying to minimize
                    kids touching the ball. At the end of each game, teams will line up in a line and face opposing
                    teams and clap to encourage sportsmanship instead of shaking hands.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
