import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { SectionTitle } from '../../common/components/SectionTitle';
import { AGE_GROUPS } from '../../common/state/age-groups';
import { PlainStack } from '../../common/components/PlainStack';
import { SubTitle } from '../../common/components/SubTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { SmartLink } from '../../common/components/SmartLink';
import { COLLISON_SOCCER_PARK_LINK } from '../locations/state';
import { U5_U6Details } from './U5_U6Details';
import { SCHEDULES_PAGE_LINK } from '../schedules/state';
import { BulletedList } from '../../common/components/BulletedList';
import { ListItem } from '../../common/components/ListItem';

export const U5_U6ProgramInfo: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>{AGE_GROUPS.U6.name} Details</SectionTitle>
                }>
                <U5_U6Locations />

                <U5_U6Schedule />

                <U5_U6Section
                    title={'Game Length'}
                    text={
                        '6 - 6-minute quarters (5 minutes breaks between quarters)'
                    }
                />

                <U5_U6Section title={'Maximum Game Roster'} text={'8'} />

                <U5_U6Section title={'Game Play'} text={'4 v 4'} />

                <U5_U6Section title={'Ball Size'} text={'3'} />

                <U5_U6Section
                    title={'Required Equipment'}
                    text={'Shin Guards'}
                />

                <U5_U6Section title={'Goalkeeper'} text={'No'} />

                <U5_U6Section
                    title={'Referee'}
                    text={
                        'No, registered and certified referees are not needed at this level. Since there is no referee, coaches are expected to manage the game environment from the touchline using these standards of play and their best judgment.'
                    }
                />

                <U5_U6Rules />

                <U5_U6Section
                    title={'Cancellations'}
                    text={
                        'The home team (blue) decides if games are canceled due to weather. The home team should be reaching out to the visiting team as soon as possible to reschedule or cancel.'
                    }
                />

                <U5_U6Section
                    title={'Sidelines'}
                    text={
                        'All players and coaches are on one side of the field, and all spectators are on the other side of the field.'
                    }
                />

                <U5_U6Section
                    title={'Half-time Decision'}
                    text={
                        'If one team is dominating the other, coaches and referees will meet at half-time. The weaker team may add one extra player to the field after a meeting has occurred.'
                    }
                />
            </CollapsiblePanel>
        </Section>
    );
};

const U5_U6Locations: FC = () => {
    return (
        <PlainStack>
            <PlainStack horizontal>
                <SubTitle>Locations:&nbsp;</SubTitle>
                <Paragraph>
                    U5/U6 program will be all “in-house” meaning there will be
                    no travel. All games will be at the{' '}
                    <SmartLink link={COLLISON_SOCCER_PARK_LINK} />
                </Paragraph>
            </PlainStack>
        </PlainStack>
    );
};

const U5_U6Schedule: FC = () => {
    return (
        <>
            <PlainStack>
                <PlainStack horizontal>
                    <SubTitle>Schedules:&nbsp;</SubTitle>
                </PlainStack>
                <PlainStack className={'pl-4'}>
                    <U5_U6Details includeTitle={false} />
                </PlainStack>
            </PlainStack>
            <PlainStack>
                <PlainStack horizontal>
                    <SubTitle>
                        Access this season's schedule here:&nbsp;
                    </SubTitle>
                    <SmartLink link={SCHEDULES_PAGE_LINK} />
                </PlainStack>
            </PlainStack>
        </>
    );
};

type U5_U6SectionProps = {
    title: string;
    text: string;
};
const U5_U6Section: FC<U5_U6SectionProps> = ({ title, text }) => {
    return (
        <PlainStack>
            <PlainStack horizontal>
                <SubTitle>{title}:&nbsp;</SubTitle>
                <Paragraph>{text}</Paragraph>
            </PlainStack>
        </PlainStack>
    );
};

const U5_U6Rules: FC = () => {
    return (
        <PlainStack>
            <PlainStack horizontal>
                <SubTitle>Rules:&nbsp;</SubTitle>
            </PlainStack>
            <BulletedList>
                <ListItem>
                    Together, coaches and parents are expected to create and
                    promote a fun and safe environment for the players.
                </ListItem>
                <ListItem>
                    Substitutions are unlimited and can occur at any time.
                </ListItem>
                <ListItem>
                    Kickoffs, free kicks, throw-ins, goal kicks, and corner
                    kicks are used to start or restart play
                </ListItem>
                <ListItem>
                    There are throw-ins from the sides. Both feet should stay
                    down.
                </ListItem>
                <ListItem>
                    Opponents should be 10 feet away from the ball on all
                    restarts.
                </ListItem>
                <ListItem>If used, all free kicks are indirect.</ListItem>
                <ListItem>
                    No heading or slide tackles. An indirect free kick will be
                    awarded to the opposing team from the spot of the offense.
                </ListItem>
                <ListItem>
                    On GOAL KICKS the defense must retreat to the half-field
                    line (or build-out line) until the ball is kicked. Goal
                    kicks and corner kicks should be taken in the general
                    vicinity of the respective goal or corner.
                </ListItem>
                <ListItem>Switch sides at half-time.</ListItem>
                <ListItem>No off-sides.</ListItem>
                <ListItem>No penalty kicks.</ListItem>
                <ListItem>Referees will be young kids - be kind!</ListItem>
                <ListItem>
                    Focus on dribbling, some passing, and a diamond shape.
                </ListItem>
                <ListItem>
                    No player may be in the goal box unless they are going after
                    the ball (no goalie).
                </ListItem>
                <ListItem>
                    Defenders should move between the goal box and the midfield
                    line depending on where the ball is on the field (They
                    should not be standing in the backfield waiting).
                </ListItem>
                <ListItem>
                    No player cards or rosters are needed at this age.
                </ListItem>
                <ListItem>
                    No jewelry, no metal headbands, barrettes, bobby pins, or
                    clips in the hair.
                </ListItem>
            </BulletedList>
        </PlainStack>
    );
};
