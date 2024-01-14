import {FC} from 'react';
import {SubTitle} from '../../../common/components/SubTitle';
import {Paragraph} from '../../../common/components/Paragraph';
import {SmartLink, SmartLinkList} from '../../../common/components/SmartLink';
import {refereeHooks, useDirectorOfRefereesContact} from '../../../common/hooks/referee-hooks';

export const RefereeOpportunities: FC = () => {
    const directorOfReferees = useDirectorOfRefereesContact();
    const refereeLinks = refereeHooks();
    return (
        <>
            <SubTitle>Become A Referee</SubTitle>
            <Paragraph>
                To become a referee, you must take classes in person and online and be
                at least 13 years old. If you are interested in being a referee for the
                Bondurant Soccer Club contact the <SmartLink link={directorOfReferees}/>
            </Paragraph>

            <SubTitle>Referee Required Training</SubTitle>
            <Paragraph>
                There is a $55.00 registration fee online by credit card when you sign up for the module. All 4
                assignments plus a Background Check must be completed to be registered for the upcoming season The
                module will include an online 25-question quiz based on the current IFAB Laws of the Game. A score of
                100% is required. If you miss any of the questions, you are taken back to the ones you marked incorrect
                and given another chance. View the Introduction to Safe and Healthy Playing Environments online
                presentation. This is a 30-minute Recognize to Recover (R2R) presentation that focuses on Concussion
                Awareness, Emergency Action Plans (EAPs), Heat Stroke, Cold Weather Playing Conditions, and Lightning
                Safety Procedures. All referees age 18 and older will be required to complete SafeSport Training - a
                90-minute module (30 minutes if you completed SafeSport last year). All referees aged 18 and over will
                undergo a mandatory Background Check and must pass the check before being registered. The cost is
                anticipated to be $30 and will be good for 2 years.
                <br/>

                IMPORTANT: US Soccer developed the Safe Soccer framework within which all participants in the soccer
                community, including referees, will play an active role in creating an environment free from emotional,
                physical, and sexual abuse. It is a comprehensive program of policies/processes, screening,
                education/training, reporting, monitoring, and enforcement designed to help you detect and report abuse,
                respond to it, and prevent future occurrences.
            </Paragraph>

            <SubTitle>Referee Tips</SubTitle>
            <Paragraph>
                Games:
                <br/>
                U7/8: Four 10-minute quarters
                <br/>
                U9/10: 25-minute halves U9/10 only: GKs must play out with their
                hands or drop to their feet. No longer able to punt the ball. The defense must retreat to the halfway
                line.
                <br/>
                U11/12: 30-minute halves U11 and under, no intentional heading allowed. If there is an infraction,
                indirect freekick
                <br/>
                U13/14: 35-minute halves
                <br/>
                U15/16: 40-minute halves
                <br/>
                U17+: 45-minute halves
                <br/>
                All games will have a 10-minute half-time unless the teams want to play earlier
                (except for U7/8).
                <br/>
                The offside rule applies at U9 and up. If you don’t have 2 ARs, find a parent/sibling to help. You can
                now play the ball backward right from a kick-off. The kicker may stand in the opposing team's half.
            </Paragraph>

            <SubTitle>Equipment</SubTitle>
            <Paragraph>
                Wear black shorts/black socks/referee jersey (try to have all referees wearing the same referee jersey
                color if possible. It is recommended to have yellow as the primary and green as a secondary. Other
                colors can be added over time). You will need a whistle/R&Y cards/score sheet/coin/stopwatch/flags for
                ARs.
            </Paragraph>

            <SubTitle>Preparing for Duty</SubTitle>
            <Paragraph>
                You may need to place corner flags if you’re refereeing the first game on that field. If you are
                refereeing the last game, please pick up the corner flags and put them in the concession stand. Corner
                flags aren’t needed for U8/U7. Arrive 30 minutes before kickoff to ensure the game starts on time. We
                want to make sure games stay on schedule. Be sure to introduce yourself to the coaches before the start
                of the match. Make sure everyone is on the same page (heading rules, offside rules, substitutions length
                of quarters/halves, etc.) This will also help build rapport before the match begins. Be sure to keep a
                level head. It can be tough when coaches/parents/players are getting on your back about calls but
                remember to stay calm and if needed stop the game and have a calm conversation about what is going on.
            </Paragraph>

            <SubTitle>Links</SubTitle>
            <SmartLinkList links={refereeLinks} />
        </>
    );
};
