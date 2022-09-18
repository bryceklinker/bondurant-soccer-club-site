import {FunctionComponent} from 'react';
import {CollapsiblePanel, LinkData, Paragraph, Section, SectionTitle, SmartLink, SubTitle} from '../common';

export interface RefereeMeetingNotesProps {
    contactLink: LinkData;
}

export const RefereeMeetingNotes: FunctionComponent<RefereeMeetingNotesProps> = ({contactLink}) => {
    return (
        <Section shadow padded>
            <CollapsiblePanel title={<SectionTitle>Referee Meeting Notes</SectionTitle>}>

                <SubTitle>Games:</SubTitle>
                <Paragraph indent>
                    U7/8: Four 10-minute quarters
                </Paragraph>
                <Paragraph indent>
                    U9/10: 25 minute halves<br/>
                    <span className={'indent'}>
                    U9/10 only: GKs must play out with their hands or drop to their feet. No longer able to punt the ball. Defense must retreat to the halfway line
                </span>
                </Paragraph>
                <Paragraph indent>
                    U11/12: 30 minute halves<br/>
                    <span className={'indent'}>
                    U11 and under, no intentional heading allowed. If there is an infraction, indirect freekick
                </span>
                </Paragraph>
                <Paragraph indent>
                    U13/14: 35 minute halves
                </Paragraph>
                <Paragraph indent>
                    U15/16: 40 minute halves
                </Paragraph>
                <Paragraph indent>
                    U17+: 45 minute halves<br/>
                    <span className={'indent'}>
                    All games will have a 10 minute half-time unless the teams want to play earlier (with the exception of U7/8)
                </span>
                </Paragraph>
                <Paragraph indent>
                    Offside rule applies at U9 and up. If you don’t have 2 ARs, find a parent/sibling to help out
                </Paragraph>
                <Paragraph indent>
                    You can now play the ball backwards right from a kick-off. The kicker may stand in the opposing
                    teams
                    half
                </Paragraph>

                <SubTitle>Equipment:</SubTitle>
                <Paragraph indent>
                    Wear black shorts/black socks/referee jersey (Try to have all referees wearing the same referee
                    jersey
                    color if possible. I would recommend having yellow as the primary and green as a secondary. Other
                    colors
                    can be added over time.)
                </Paragraph>
                <Paragraph indent>
                    You will need a whistle/R&Y cards/score sheet/coin/stop watch/flags for ARs
                </Paragraph>
                <Paragraph indent>
                    You may need to place corner flags if you’re refereeing the first game on that field. If you are
                    refereeing the last game, please pickup the corner flags and put them in the concession stand.
                    Corner
                    flags aren’t needed for U8/U7.
                </Paragraph>

                <Paragraph>
                    Please arrive 30 minutes prior to kickoff to ensure the game starts on time. We want to make sure
                    games
                    stay on schedule.
                </Paragraph>

                <Paragraph>
                    Be sure to introduce yourself to the coaches prior to the start of match. Make sure everyone is on
                    the
                    same page (heading rules, offside rules, substitutions length of quarters/halves, etc.) This will
                    also
                    help build rapport before the match begins.
                </Paragraph>

                <Paragraph>
                    Be sure to keep a level head. It can be tough when coaches/parents/players are getting on your back
                    about calls but remember to stay calm and if needed stop the game and have a calm conversation about
                    what is going on. As always, reach out to me if you ever need anything or have any questions.
                </Paragraph>

                <Paragraph>
                    <SmartLink link={contactLink}/>
                </Paragraph>

                <Paragraph>
                    Thank you for all you do for the sport of soccer and for the Bondurant Soccer Club!
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
