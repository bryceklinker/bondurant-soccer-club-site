import { BoardMemberData, FrequentlyAskedQuestionData } from './models';
import { RouteNames } from '../routing';
import {
    DIRECTORS_OF_COACHES,
    DIRECTORS_OF_REFEREES,
    DIRECTORS_OF_CONCESSIONS,
    PRESIDENTS,
    REGISTRARS,
    DIRECTORS_OF_U5_U6,
    DIRECTORS_OF_EQUIPMENT
} from './board-members';
import {
    FALL_REGISTRATION_DATES,
    REGISTRATION_SOFTWARE,
    SPRING_REGISTRATION_DATES
} from './registration';
import { Dates } from '../extensions';
import { U9_AND_UP_SCHEDULE_LINK } from './schedules';

export const FREQUENTLY_ASKED_QUESTIONS: Array<FrequentlyAskedQuestionData> = [
    {
        question: 'What equipment is required for my player?',
        answer: 'Soccer ball (5-8U size 3, 9-12U size 4, 13U and up size 5), shin guards, cleats (5/6U may wear tennis shoes, but cleats are recommended.) Uniform for games – will depend upon age as to what this entails.  If you need assistance for any of these items, please contact the Club. We have items available that may work for you.'
    },
    {
        question:
            'Can my player wear earrings, jewelry, hair clips, hard casts?',
        answer: 'No jewelry other than medic alert is permitted. Hair clips that are hard can injure a player and are not allowed. Players with a cast may be allowed to play if the cast is soft wrapped. But the final determination for any playing is up to the Referee.'
    },
    {
        question: "What will be the practice schedule for my player's team?",
        answer: 'The practice schedule is determined by the coach and can vary. Teams often practice twice a week for an hour or a little more and can be any day of the week that works for the coach. It’s when it works best for them and you may need to adjust your schedule to accommodate.  The best way to know what the schedule will be is to be the one to set the schedule - become a coach. If interested in coaching, please contact a director of coaches and register today.'
    },
    {
        question: 'When are my player’s games played?',
        answer: 'Please check the program details for this information.',
        links: [
            {
                text: 'Program Details',
                url: RouteNames.ProgramInfo
            }
        ]
    },
    {
        question: 'When will I hear from my player’s coach?',
        answer: 'Coaches receive their rosters about 3 weeks before the first game and after the Coaches meeting. You will not hear from them until after that time period. '
    },
    {
        question:
            'What if my player decides not to play or is no longer able to play after I completed registration?',
        answer: 'Depending upon the reason and how far into the season the request is made, some of the registration amount may be refunded upon Board approval. Processing fees will be withheld from the refund amount.'
    },
    {
        question: 'Can I help out the coach for my player’s team?',
        answer: 'Yes – but only if you register. Due to governing bodies rules and federal law, we can only have those folks who register (completing a thorough background check and trainings) are allowed to interact with the players. We would love to have you help – just contact the Director of Coaches and complete your registration today.',
        links: [
            {
                text: 'Director of Coaches',
                url: `mailto:${BoardMemberData.getMailtoEmails(
                    DIRECTORS_OF_COACHES
                )}`
            }
        ]
    },
    {
        question:
            'How do I know if the person with my team is approved to assist?',
        answer: 'You can check out the approved list anytime. This is updated every Friday with the most recent information.',
        links: [
            {
                text: 'Approved Coaches List',
                url: 'http://www.Iowasoccerlive.org/approvedcoacheslist'
            }
        ]
    },
    {
        question:
            'What if I don’t agree with what a referee called on the play?',
        answer: 'The referees do their best with what they can see and how they feel the situation played out. If you have any concerns, please contact our Director of Referees. It is not ok, under any circumstances, for you to yell at the referee or come onto the field and confront them. Doing this can get you removed from the Club.',
        links: [
            {
                text: 'Director of Referees',
                url: `mailto:${BoardMemberData.getMailtoEmails(
                    DIRECTORS_OF_REFEREES
                )}`
            }
        ]
    },
    {
        question:
            'We have an unruly parent on our team or the team that we played against. Is there anything that can be done?',
        answer: 'If it’s during a game at BSC fields, please contact the Board Member on Duty. They are available to assist in these situations. If at a different location or you want to advise the club of the situation further, please contact our President with the details and, if applicable, any evidence. They will help deal with the situation with that person/club.',
        links: [
            {
                text: 'President',
                url: `mailto:${BoardMemberData.getMailtoEmails(PRESIDENTS)}`
            }
        ]
    },
    {
        question: 'How else can I volunteer?',
        answer: 'We are always in need of folks who can help out in the concession stand, run a mower, willing to help paint lines on fields, general clean up, or help with field days. Contact a Board member and they can help get you going.',
        links: [
            {
                text: 'Get Involved',
                url: RouteNames.GetInvolved
            }
        ]
    },
    {
        question: 'How do I contact a Board Member?',
        answer: 'Check out the BSC Board tab for the email addresses of the various board members.',
        links: [
            {
                text: 'Board Members',
                url: RouteNames.ContactUs
            }
        ]
    },
    {
        question: 'Are dogs allowed at the soccer complex?',
        answer: 'Yes. Please be sure to clean up after them and keep them on a close leash. Any owners or animals who are not controlled will be asked to leave.'
    }
];

export const REGISTRATION_FREQUENTLY_ASKED_QUESTIONS: Array<FrequentlyAskedQuestionData> =
    [
        {
            question:
                'Why must I provide a copy of birth certificate or passport? Can I use some other document that shows the player’s date of birth?',
            answer: `ISA requires that upon new registration, we have a government issued proof of age on file for every child who is a member of our club. This upload is how they regulate that. It stays with your player and should be available if they transfer to/from a different club that uses ${REGISTRATION_SOFTWARE.name}.`,
            links: [REGISTRATION_SOFTWARE.link]
        },
        {
            question: 'Why must I provide a new picture?',
            answer: 'Each fall and with new registration, you are required to update the photo of your player as part of the player card requirement. This ensures that all players are fully registered with their clubs and is an ISA requirement. Photos must be within the last year and cannot include other people, pets, etc. and need only be of the head (like a DMV photo).'
        },
        {
            question:
                "The system doesn't allow me to register my player for the age group I think they should be with. Why is that?",
            answer: "Registration is completed by birth year and gender. If you believe your player should be playing with different group, you must complete a 'play up' request with the registration in order to have this option considered. The Board will review these requests and with the guidance of coaches and if space is available to determine if the play up request will be allowed. Decision of the Board is final for that season. New requests must be submitted each season."
        },
        {
            question:
                "Will my player's team be the same as it was last season?",
            answer: 'New teams are formed randomly every fall. Each spring, the teams will remain the same as long as registration is completed on time and there are enough players to make the team viable for the spring season. If there are not enough, then previous teams may be combined or players randomly sorted into the teams that are available.'
        },
        {
            question:
                'Can I request my player to be with a specific coach/team/teammate?',
            answer: 'The governing bodies for Bondurant Soccer require that recreational soccer teams be randomly assigned and as such, the club cannot honor requests such as this without approval from the board. Siblings that are in the same age category may be allowed to play on the same team if the request is made and it is known that they are siblings. Coaches will coach their own players unless they request otherwise. But all other players will be randomly placed on teams.'
        },
        {
            question:
                'What if my player would like to play for multiple teams?',
            answer: 'This can get tricky. It depends upon the teams that they want to play on and if they are registering for both or guest playing. If they are playing with a level 2/select team or if they are playing all level 3/rec teams, then there are specific ISA rules that must be followed. All of these must have Board approval prior to being allowed. This is whether all teams are at BSC or with another club. If the player wants to be a guest player on a different team than the one they are regularly on, then the Coach must follow certain steps, complete paperwork, and the player card is needed.'
        },
        {
            question:
                "I'm having trouble with registration (I get an error message or my system says I do not have access to view a page). What should I do?",
            answer: 'If you get a message that says you are not logged in; chances are you need to clear out the cache on your internet browser. This can be done by holding down the CTRL button and hitting F5. Once the system has completed this, you can log out of the website and then log back in. If you were in the middle of a registration, you will be able to get the registration in your shopping cart and pick up where you left off. If you continue to have issues, contact the Registrar',
            links: [
                {
                    text: 'Registrar Contact',
                    url: `mailto:${BoardMemberData.getMailtoEmails(REGISTRARS)}`
                }
            ]
        },
        {
            question:
                'Registration is closed but my child has now decided that they want to play. What can I do?',
            answer:
                'Contact the registrar to determine if there is space available. Be sure to include the ' +
                "player's name and date of birth. If an opening for your child is available, the Registrar " +
                'will provide you with the registration options at that time. Play up requests from players that ' +
                'registered on time may take precedence over a new registration that is late. Remember that ' +
                `registration is open for the fall each ${Dates.formatShortDate(
                    FALL_REGISTRATION_DATES.earlyBird?.start
                )}` +
                `through ${Dates.formatShortDate(
                    FALL_REGISTRATION_DATES.cutoff
                )} and for spring each ` +
                `${Dates.formatShortDate(
                    SPRING_REGISTRATION_DATES.earlyBird?.start
                )}` +
                `through ${Dates.formatShortDate(
                    SPRING_REGISTRATION_DATES.cutoff
                )}. Registration cut offs` +
                `are due to governing bodies needing time to set up schedules and team pools.`,
            links: [
                {
                    text: 'Registrar Contact',
                    url: `mailto:${BoardMemberData.getMailtoEmails(REGISTRARS)}`
                }
            ]
        },
        {
            question:
                'Registration is closed but we just moved to town and my child would like to play. What can I do?',
            answer: "Contact the registrar to determine if there is space available. Be sure to include the player's name and date of birth. If an opening for your child is available, the Registrar will provide you with the registration options at that time.",
            links: [
                {
                    text: 'Registrar Contact',
                    url: `mailto:${BoardMemberData.getMailtoEmails(REGISTRARS)}`
                }
            ]
        }
    ];

export const COACH_FREQUENTLY_ASKED_QUESTIONS: Array<FrequentlyAskedQuestionData> =
    [
        {
            question:
                'What do I do if it is raining/snowing/freezing/super hot/lightning?',
            answer: 'If fields at BSC are closed, signs will be posted, website announcement added, and Facebook will be updated. If lightning, games may be delayed 30 minutes for each strike. If the weather is junky otherwise, then it is up to the coach’s discretion as to if practice or game is played. For 5/6U, the Director will make the decision. If tornado sirens are going off, all play is off and everyone should take appropriate shelter. If your game is at another complex and you are unsure as to whether the game should be played or not, you will want to be in contact with the other coach. Field status that has been reported to ISA is available.',
            links: [
                {
                    text: 'ISA Field Status',
                    url: 'http://www.iowasoccer.org/facility_status_league_play/'
                }
            ]
        },
        {
            question: 'How do I reschedule a game?',
            answer: 'You need to be in contact with the opposing team coach to work out a time that works for both of you. If the game is away, then that coach will have to work with their club to get the field and referee(s). If at BSC field, contact Director of Referees to schedule the field and referee(s) and advise Director of Concessions to ensure that other needs are met.',
            links: [
                {
                    text: 'Game Cancellation Contact',
                    url: `mailto:${BoardMemberData.getMailtoEmails(
                        DIRECTORS_OF_REFEREES.concat(
                            ...DIRECTORS_OF_CONCESSIONS
                        )
                    )}`
                }
            ]
        },
        {
            question: 'When/how do I contact the opposing team coach?',
            answer: `9U and up are available in ${REGISTRATION_SOFTWARE.name}. 7/8U are available in email that you received. 5/6U will contact your director. For all, contact your Director of Coaches with any questions or issues you may have.`,
            links: [
                {
                    ...U9_AND_UP_SCHEDULE_LINK,
                    text: 'U9+ Schedule'
                },
                {
                    text: 'U5/U6 Director Contact',
                    url: `mailto:${BoardMemberData.getMailtoEmails(
                        DIRECTORS_OF_U5_U6
                    )}`
                }
            ]
        },
        {
            question: 'What are player cards/coach badges? Do I need these?',
            answer: 'Player and coach cards help referees know who is registered with a club. These are required to be shared with a referee at any game played. If you do not have a player card, contract the Registrar to see about getting that. Players cannot play without them.'
        },
        {
            question: 'When will I receive my roster and schedule?',
            answer: 'Rosters and player cards are handed out at the coach meeting right before the season starts. You will only receive player cards for those who have completed their full registration. Rosters sent via email so that you have a copy available at all times. Referees may ask for this to confirm your team.'
        },
        {
            question: 'What if I am short players for our game?',
            answer: 'If you know ahead of time, you are be able to request guest players or you may reschedule. Guest player requests must be submitted by Friday in advance of the game and be approved prior to being able to be used. '
        },
        {
            question: 'When are practices?',
            answer: 'You are allowed to start practices approximately 2 weeks before the season starts (depending upon the weather). You determine the days/times, working with your Director of Coaches for practice field availability. You are NOT allowed to practice on game fields. Doing so can cost you the right to play and could cause the Club to lose the right to use that field. Only a scrimmage game against another team is allowed on the BSC game fields, but NEVER the school fields, and only if the field is available.',
            links: [
                {
                    text: 'Director of Coaches',
                    url: `mailto:${BoardMemberData.getMailtoEmails(
                        DIRECTORS_OF_COACHES
                    )}`
                }
            ]
        },
        {
            question: 'Do I need to provide my own equipment?',
            answer: 'We provide a coach bag, pennies, cones, first aid kit, and a couple of practice balls to each coach. If there’s something more you would like, contact the Director of Equipment to get that for you.',
            links: [
                {
                    text: 'Director of Equipment',
                    url: `mailto:${BoardMemberData.getMailtoEmails(
                        DIRECTORS_OF_EQUIPMENT
                    )}`
                }
            ]
        }
    ];
