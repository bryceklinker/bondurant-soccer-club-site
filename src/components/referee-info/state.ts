import { BoardMemberData, LinkData } from '../../common/state/models';
import { DIRECTORS_OF_REFEREES } from '../../common/state/board-members';

export const DIRECTOR_OF_REFEREES_CONTACT_LINK: LinkData = {
    text: 'Director of Referees',
    url: `mailto:${BoardMemberData.getMailtoEmails(DIRECTORS_OF_REFEREES)}`
};
export const REFEREE_RECERTIFICATION_STEPS: Array<string> = [
    'Complete the Grassroots training required for renewal.',
    'Take an online 25 question quiz based on the 2019-20 IFAB Laws of the Game. A score of 100% is required. If you miss any of the questions, you are taken back to the ones you marked incorrect and given another chance.',
    'View the 2020 Introduction to Safe and Healthy Playing Environments online presentation. This is a 30 minute Recognize to Recover (R2R) presentation that focuses on Concussion Awareness, Emergency Action Plans (EAPs), Heat Stroke, Cold Weather Playing Conditions, and Lightning Safety Procedures.',
    'All referees age 18 and older will be required to complete 2020 SafeSport Training - a 90 minute module (30 minutes if you completed SafeSport last year).',
    'All referees age 18 and over will undergo a mandatory Background Check and must pass the check before being registered for 2020. The cost is anticipated to be $30 and will be good for 2 years.'
];
export const REFEREE_REQUIRED_TRAINING_LINK: LinkData = {
    text: 'Referee Required Training',
    url: 'https://learning.ussoccer.com/referee/'
};
export const REFEREE_RECERTIFICATION_COST = 55;
