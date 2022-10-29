import { ByLawArticleData, ByLawsData } from '../../common/state/models';

const ARTICLE_1: ByLawArticleData = {
    key: 'I',
    title: 'Name',
    text: 'This organization shall be known as the Bondurant Soccer Club, hereinafter referred to as BSC.'
};
const ARTICLE_2: ByLawArticleData = {
    key: 'II',
    title: 'Purpose',
    text:
        'The purpose for which this Corporation is formed is to further and promote the progressive ' +
        'development of the sport of youth soccer through organization, training, and education; to organize ' +
        'youth soccer teams to participate and compete in soccer; and to promote the progressive development ' +
        'of the sport of youth soccer through the establishment and development of youth soccer programs.'
};
const ARTICLE_3: ByLawArticleData = {
    key: 'III',
    title: 'Club Membership',
    sections: [
        {
            key: '1',
            title: 'Qualifications',
            items: [
                'The parents/legal guardians of all soccer players for whom a membership fee has been paid or for ' +
                    'whom a scholarship grant has been received within the current soccer year.',

                'Coaches and assistant coaches of all BSC teams.',

                'All Officers, Directors, or Coordinators of BSC.',

                'Referees who consistently referee BSC games and are currently being used by BSC. Referees will be ' +
                    'considered non-voting members.'
            ]
        },
        {
            key: '2',
            title: 'Non-Descrimination; Termination of Membership',
            items: [
                'No one shall be refused membership because of race, religion, gender, creed, or ability. ',
                'In order to continue membership, members must maintain good standing with respect to ' +
                    'prompt payment of fees and abide by the rules and regulations of BSC.',

                'Membership of any member may be terminated by majority vote of the Board of Directors.'
            ]
        },
        {
            key: '3',
            title: 'Team Formation of Membership',
            description:
                'Level 3 teams within the club shall be formed by the following criteria and abiding by all league guidelines',
            items: ['Age', 'Gender']
        }
    ]
};
const ARTICLE_4: ByLawArticleData = {
    key: 'IV',
    title: 'Annual Meeting',
    sections: [
        {
            key: '1',
            title:
                'Annual Meeting An annual meeting of the members of BSC shall be held in the last quarter of ' +
                'the fiscal year for the purpose of electing and installing Officers and for such other business as may be ' +
                'appropriate.'
        },
        {
            key: '2',
            title:
                'Quorum The members present will constitute a quorum for the transaction of business at the ' +
                'annual meeting of the members of BSC.'
        },
        {
            key: '3',
            title:
                'Elections and Voting Any member can make a nomination for election of an officer to the ' +
                'nominating committee. Nominations must be submitted to the nominating committee, as described in ' +
                'Article VII, Section 2, two (2) weeks prior to the annual meeting for the current year’s election. Elected ' +
                'Directors will include President, Vice President, Secretary, and Treasurer. Each member shall have one ' +
                'vote on each matter submitted to vote. Simple majority will constitute approval of any issue submitted ' +
                'to vote.'
        },
        {
            key: '4',
            title:
                'Participation in Meeting Any member of BSC shall have the right to attend meetings of BSC, ' +
                'including Board of Directors meetings. If a member of the club would like to address the Board, ' +
                'regarding a specific issue, said member must contact the Club President 24 hours prior to the scheduled ' +
                'meeting to be placed on the agenda. Voting privileges may only be exercised by a member in ' +
                'attendance at a meeting of the membership. The Board reserves the right to limit the amount of time ' +
                'for the club member. The Board has the right to go into closed session at the discretion of the Board ' +
                'President by a simple majority vote.'
        }
    ]
};
const ARTICLE_5: ByLawArticleData = {
    key: 'V',
    title: 'Board of Directors',
    sections: [
        {
            key: '1',
            title:
                'Board Members The affairs of BSC shall be governed by a Board of Directors as elected by the ' +
                'membership and appointed Board members. Non-voting members may be appointed by the Board of ' +
                'Directors from time to time. Any member of the club, as defined in Article III, Section 1, at the time of ' +
                'election, shall be eligible for election to the Board of Directors.'
        },
        {
            key: '2',
            title:
                'Election of Board The President, Vice President, Secretary, and Treasurer shall be elected by ' +
                'the members pursuant to Article IV, Section 3. The remaining members of the Board shall be appointed ' +
                'by the elected Directors during the third quarter of the fiscal year. In the event of gridlock with ' +
                'appointed positions the remaining Board will vote on the tiebreaker.'
        },
        {
            key: '3',
            title:
                'Terms of Office The elected Board of Directors of BSC will serve a term of two (2) years. A ' +
                'person may be elected to serve consecutive terms. The President and Secretary will be up for election ' +
                'during even years and the Vice President and Treasurer during odd years.'
        },
        {
            key: '4',
            title: 'Vacancies Vacancies which may occur on the Board of Directors shall be filled for the remainder of the term by the existing Board of Directors.'
        },
        {
            key: '5',
            title: 'Termination of Directorship',
            items: [
                'Absence from three consecutive Board meetings without explanation, or for reasons which may be ' +
                    "considered unacceptable by the Board, shall be the equivalent of a Director's resignation and that " +
                    "Director's seat may be declared vacant by an affirmative vote of a majority of the remaining Directors " +
                    'and Officers.',

                'A director may be removed from office with or without cause upon the affirmative vote of a majority of the remaining Directors and Officers.',

                'A directorship is terminated by the election of a successor at the annual board meeting as conducted in Article IV, Section 3.'
            ]
        },
        {
            key: '6',
            title:
                'Regular Meetings The Board of Directors of BSC shall hold monthly meetings on the last ' +
                'Thursday of each month, or on any regularly scheduled day approved and published by the board. A ' +
                'special meeting of the board can be called by the President. Notice of any special meeting shall be ' +
                'posted on the website in advance of said special meeting.'
        },
        {
            key: '7',
            title:
                'Quorum At any meeting of the Board of Directors a quorum for the transaction of business ' +
                'shall be simple majority of the Directors present.'
        },
        {
            key: '8',
            title:
                'Compensation All members of the Board of Directors shall serve without compensation ' +
                'except that actual expenses authorized by the Board of Directors may be reimbursed.'
        },
        {
            key: '9',
            title:
                'Membership on the Board and Special Areas of Responsibilities The President, Vice ' +
                'President, Secretary, Treasurer, and any other Officers of BSC elected by the members shall serve on the ' +
                'Board of Directors. In addition, Directors and Assistant Directors shall be appointed as provided in ' +
                'Section 2 of this Article. Assistant Directors will be non-voting Directors of the Board. Appointed ' +
                'Directors shall serve in the following areas of responsibility:',
            items: [
                'Director of Registration – The Director of Registration shall organize preseason registration, set ' +
                    'registration deadlines, and collect registration fees. He/She shall update registration forms and initiate ' +
                    'online registration. The Director shall establish and maintain a current file on each player and team ' +
                    'rosters. Director shall distribute official player cards, rosters, and schedules to individual teams prior to ' +
                    'the beginning of the season.',

                'Director of Coaches – The Director of Coaches shall be responsible for insuring that BSC has a coach ' +
                    'or coaches for each team and shall maintain a roster of coaches including name, address, and phone ' +
                    'number of coaches for distribution to each Board member. The Director shall provide necessary ' +
                    'information to the coaches, and shall provide at least one training and education session each season ' +
                    'for coaches. The Director shall report scores to the League and be the primary contact for coaches for ' +
                    'changes made to game schedule.',

                'Director of Referees – The Director of Referees shall assign referees to all BSC sanctioned games as ' +
                    'necessary, shall maintain a current file of all games officiated by referees, and shall maintain a file for ' +
                    'each player or coach expelled from any game. The Director shall recruit and provide for certification ' +
                    'opportunities to members of BSC, shall provide at least one training and education session each year for ' +
                    'referees, and shall coordinate referee compensation.',

                'Director of Fields – The Director of Fields shall insure that adequate fields are available each season ' +
                    'and shall be responsible for maintaining and marking fields. The Director shall be responsible for field ' +
                    'improvements and shall be responsible for maintenance of the soccer club facility and equipment used ' +
                    'for field maintenance.',

                'Director of Equipment – The Director of Equipment shall organize, maintain, and keep records for a ' +
                    'system of purchasing, dispersing, and storing equipment other than that for the fields, and shall inform ' +
                    'BSC of needs, make requests, and purchase new equipment upon approval of the Board.',

                'Director of Communications – The Director of Communications shall be responsible for dissemination ' +
                    'of the information concerning the activities and business of BSC to its members via newsletter, website, ' +
                    'or other appropriate means. He/She shall establish and maintain a liaison with news media and, as ' +
                    'appropriate, arrange for publicity concerning events, games scores, and other activities of BSC in the ' +
                    'local media. The Director shall maintain the soccer club website.',

                'Director of Concessions – The Director of Concessions shall be responsible for maintaining concession ' +
                    'inventory and equipment. Director shall create and distribute a schedule for concession stand workers ' +
                    'prior to the beginning of the season.',

                'Director of U6 Program – The Director of U6 Program shall organize and maintain all U6 information, ' +
                    'communicate with U6 coaches, and schedule U6 games and concession workers. The Director shall ' +
                    'attend and direct all U6 activities.',

                'Director at Large – The Director at Large shall perform duties as assigned by the Board.'
            ]
        },
        {
            key: '10',
            title:
                'Director on Duty. In addition to the aforementioned duties, all Directors and Assistant ' +
                'Directors are responsible to be the Director on Duty for a minimum of one soccer day per season. '
        },
        {
            key: '11',
            title:
                'Park and Recreation Board Member – In addition, one Board member must attend the City ' +
                'of Bondurant Park and Recreation monthly meeting. This Board member must be a resident of the City ' +
                'of Bondurant.'
        },
        {
            key: '12',
            title:
                'Terms of Office – The appointed Board of Directors of BSC will serve a term of one year. A ' +
                'person may be reappointed to serve consecutive terms during an annual review completed in the third ' +
                'quarter of the fiscal year by the elected Board of Directors.'
        }
    ]
};
const ARTICLE_6: ByLawArticleData = {
    key: 'VI',
    title: 'Officers',
    sections: [
        {
            key: '1',
            title:
                'Officers The Officers of BSC, elected by the members, as provided in Article IV, Section 3, shall ' +
                'be a President, Vice President, Secretary, and Treasurer. Each Officer shall be elected by majority vote of ' +
                'those present at the annual meeting of BSC for a two (2) year term, or until their successors are duly ' +
                'elected and qualified.'
        },
        {
            key: '2',
            title:
                'President The President shall call and preside at all meetings of the Board of Directors and ' +
                'BSC. The President shall be responsible for supervising the activities of BSC and administration of all ' +
                'orders, policies, and resolutions of the Board of Directors. The President, or his designee, shall sign all ' +
                'agreements, contracts, deeds, leases, and other instruments as may pertain to the ordinary course of ' +
                'BSC’s business, subject to the approval of the Board of Directors, which may be given in the adoption of ' +
                'a budget. The President shall appoint other offices and committees as deemed necessary. In order to be ' +
                'President, a person must have served in another Board position for at least one year immediately ' +
                'preceding the year in which he/she is elected President.'
        },
        {
            key: '3',
            title:
                'Vice President In the event the President shall be absent from any meeting at which he/she is ' +
                'to preside, resigns, or becomes unable to fulfill his/her duties, the Vice President shall assume the duties ' +
                'of the President. The Vice President shall perform such duties as are delegated by the President of the ' +
                'Board of Directors from time to time. The Officer shall be responsible to attend monthly League ' +
                'meetings and serve as Risk Management Officer. He/She shall coordinate the annual financial audit.'
        },
        {
            key: '4',
            title:
                'Secretary The Secretary shall record and maintain the minutes of all meetings and provide ' +
                'copies to all Board members. The Secretary shall keep the permanent records of BSC and make them ' +
                'available to all members of the Board of Directors and such other eligible persons as requested. The ' +
                'Secretary shall maintain the club’s bylaws, policies, procedures, job descriptions, and the address and ' +
                'phone numbers of Board and committee members.'
        },
        {
            key: '5',
            title:
                'Treasurer The Treasurer shall keep the financial records of BSC and shall make such reports ' +
                'available to the Board of Directors as reasonably requested. The Treasurer shall sign checks and ' +
                'promissory notes as are necessary for the conduct of business of BSC within the limits of the budget and ' +
                'resolutions approved by the Board of Directors and shall account for all expenditures and receipts of all ' +
                'funds. The Treasurer shall assist the Board of Directors in the preparation of an annual line item budget ' +
                'that shall be approved by the Board of Directors prior to commencement of the fiscal year. He/She shall ' +
                'follow up on all delinquent accounts and file all required tax returns.'
        },
        {
            key: '6',
            title:
                'Compensation All Officers of BSC shall serve without compensation except that actual' +
                'expenses authorized by the Board of Directors may be reimbursed.'
        }
    ]
};
const ARTICLE_7: ByLawArticleData = {
    key: 'VII',
    title: 'Committees and Coordinators',
    text: 'Head of committees or designated person shall attend Board meetings to report activity of the committee.',
    sections: [
        {
            key: '1',
            title:
                'Executive Committee There shall be an Executive Committee that shall consist of the ' +
                'President, Vice President, Registrar, Secretary, and Treasurer. The Executive Committee shall be ' +
                'empowered to act on behalf of BSC on all matters relating to the operation of BSC in the interim ' +
                'between meetings which require immediate action of the Board of Directors subject to notice of such ' +
                'action being made and notification of such action taken at the next regular meeting of the Board of ' +
                'Directors. In addition, it shall act on such matters as have been delegated to it by the Board of Directors. ' +
                'The Executive Committee shall monitor the activities of all other committees and sub-bodies of BSC.'
        },
        {
            key: '2',
            title:
                'Nominating Committee The Nominating Committee shall consist of the two elected officers ' +
                'that are not up for re-election. The Committee will be responsible for receiving nominations 2 weeks ' +
                'prior to the annual meeting and coordinating the election activities at the annual meeting.'
        },
        {
            key: '3',
            title:
                ' Internal Audit Committee The Vice President shall appoint, as early in each fiscal year as ' +
                'practical, an Internal Audit Committee consisting of at least two members to audit the books and ' +
                'records of BSC and report thereon to the Board of Directors.'
        },
        {
            key: '4',
            title:
                'Special Committees and Coordinators Special Committees and Coordinators may be ' +
                'appointed by the President or the Board of Directors and may include any interested person, to act on ' +
                'any specific question or task. Such committee shall dissolve with no further action required upon ' +
                'conclusion of the assignee task or by resolution of the Board of Directors.'
        }
    ]
};
const ARTICLE_8: ByLawArticleData = {
    key: 'VII',
    title: 'Termination, Dissolution, or Liquidation of Assets',
    items: [
        'All liabilities of the Corporation shall be paid and discarded, or adequate provisions shall be made therefore;',

        'Assets helped by the Corporation upon condition requiring return, transfer, or conveyance, which on ' +
            'condition occurs by reasons dissolution, shall be returned, transferred, or conveyed in accordance with ' +
            'such instruments governing the establishment of such requirements; and',

        'Any remaining assets shall be transferred or conveyed exclusively for the purposes of the Corporation ' +
            'or to such organization or organizations operated exclusively for the recreational, charitable, ' +
            'educational, or other nonprofit purposes as shall at the time qualify as an exempt organization or ' +
            'organizations under Section 501© of the Internal Revenue Code of 1954, as it may be amended, in such ' +
            'manner as the Board of Directors shall determine.'
    ]
};
const ARTICLE_9: ByLawArticleData = {
    key: 'IX',
    title: 'Parliamentary Authority',
    text:
        'Robert’s Rules of Order, Revised, shall govern all activities of the Corporation except as limited by the ' +
        'Articles of Incorporation, or by these Bylaws. Such rules may be amended at any time by a majority vote ' +
        'of the Board of Directors.'
};
const ARTICLE_10: ByLawArticleData = {
    key: 'X',
    title: 'Execution of Instruments',
    sections: [
        {
            key: '1',
            title:
                'Checks and Debt Instruments All checks, promissory notes, bonds, debentures, and such ' +
                'other obligations drawing upon the funds of the Corporation shall require the signature of the ' +
                'Treasurer, President, or Vice President as designated by the Board of Directors. All checks above the ' +
                'amount of $1,000.00 shall require the signature of the Treasurer and one other Officer.'
        },
        {
            key: '2',
            title:
                'Contracts, Deeds, and Leases All contracts (excluding purchase orders and commitments for ' +
                'current budgeted or other Board-approved expenditures), deeds, and leases shall be signed by the ' +
                'President or Senior Vice President and co-signed by the Secretary or Treasurer upon resolution ' +
                'approving such instrument by the Board of Directors.'
        }
    ]
};
const ARTICLE_11: ByLawArticleData = {
    key: 'XI',
    title: ' Indemnification of Officers, Directors, Employees, Members, Volunteers, and Agents',
    sections: [
        {
            key: '1',
            title:
                'Any person who was or is a party or is threatened to be made a party to any threatened, ' +
                'pending, or completed action, suit, or proceeding, whether civil, criminal, administrative, or ' +
                'investigative by reason of the fact that he is or was a Director, Officer, employee, member, volunteer, or\n' +
                'agent of another corporation, partnership, joint venture, trust, or enterprise, shall be indemnified to the\n' +
                'following circumstances:',
            items: [
                'In an action, suitor proceeding other than an action by or in the right of the Corporation, such person ' +
                    'shall be indemnified against expenses (including attorney’s fees), judgments, fines, and amounts paid in ' +
                    'the settlement actually and reasonably incurred by him in connection with such actions, suit, or ' +
                    'proceeding if he acted in good faith and in a manner he reasonably believed to be in or not opposed to ' +
                    'the best interests of the Corporation, and with respect to any criminal action or proceeding, had no ' +
                    'reasonable cause to believe that his conduct was unlawful. The termination of any action, suit, or ' +
                    'proceeding by judgment, order, settlement, conviction, or upon a plea of no contest or its equivalent, ' +
                    'shall not, of itself, create a presumption that the person did not act in good faith and in a manner which ' +
                    'he reasonably believed to be in or not opposed to the best interest of the Corporation, and, with respect ' +
                    'to any criminal action or proceeding, had reasonable cause to believe that his conduct was unlawful.',

                'In an action, suit or proceeding by or in the right of the Corporation, such person shall be indemnified ' +
                    'against expenses (including attorney’s fees) actually and reasonably incurred by him in connection with ' +
                    'the defense or settlement of such action or suit if he acted in good faith and in a manner he reasonably ' +
                    'believed to be in or not opposed to the best interests of the Corporation except that no indemnification ' +
                    'shall be made in respect of any claim, issue or matter as to which such person shall have been adjudged ' +
                    'to be liable for negligence or misconduct in the performance of his duty to the Corporation unless and ' +
                    'only to the extent that the court which such action or suite was brought shall determine upon ' +
                    'application that, despite the adjudication of liability, such person is fairly and reasonably entitled to ' +
                    'indemnity for such expenses which such court shall deem proper.'
            ]
        },
        {
            key: '2',
            title: 'Any such indemnification under the Bylaw (unless ordered by a court) shall be made by the Corporation only:',
            items: [
                'To the extent that a Director, Officer, employee, member, volunteer, or agent of the BSC Corporation ' +
                    'has been successful on the merits or otherwise in the defense of any action, suit or proceeding, or',

                'Upon a determination that the indemnification of such Director, Officer, employee, member, ' +
                    'volunteer, or agent is proper in the specific circumstances because he has met the applicable standard ' +
                    'of conduct set forth in this Bylaw. Such determination shall be made (1) by the Board of Directors by a ' +
                    'majority vote of a quorum consisting of Directors who are not parties to such action, suit, or proceeding, ' +
                    'or (2) if such a quorum is not obtainable or even if obtainable, quorum of disinterested Directors so ' +
                    'directs, by independent legal counsel in a written opinion.'
            ]
        },
        {
            key: '3',
            title:
                'Expenses incurred in defending a civil or criminal action, suit, or proceeding may be paid in ' +
                'advance of the final disposition of such action, suit, or proceeding only as authorized by the Board of ' +
                'Directors by a majority vote of a quorum consisting of Directors who are not parties to such action, suit ' +
                'or proceeding and upon receipt of an undertaking by or on behalf on the Director, Officer, employee, ' +
                'member, volunteer, or agent to repay such amount unless it shall ultimately be determined that he is ' +
                'entitled to be indemnified by the Corporation under this Bylaw.'
        },
        {
            key: '4',
            title:
                'The indemnification herein provided shall not be deemed exclusive of any other rights to ' +
                'which a person indemnified may be entitled under any statute, including the Iowa Non-profit ' +
                'Corporation Act as it now exists of is hereafter amended, or any other Bylaw, agreement, vote of ' +
                'disinterested Directors or otherwise, both as to action in his official capacity and as to action in other ' +
                'capacity while holding such a Director, Officer, employee, member, volunteer, or agent and shall insure ' +
                'to the benefit of the heirs, executor and administrator of such a person. It is intended by the foregoing, ' +
                'and it shall be so interpreted, to provide all such indemnification of Officers, Directors, employees, and ' +
                'volunteers as may be permitted under the Code of Iowa, or as hereafter amended.'
        }
    ]
};
const ARTICLE_12: ByLawArticleData = {
    key: 'XII',
    title: 'Funds',
    sections: [
        {
            key: '1',
            title:
                'Nothing to the contrary withstanding, all funds utilized for the purposes of the Corporation ' +
                'shall be promptly deposited in the lawful depositor of the Corporation and be disbursed only by ' +
                'resolution of the Board of Directors, or as provided in the budget, or as required by existing contracts ' +
                'previously approved by the Board of Directors.'
        },
        {
            key: '2',
            title:
                'This Corporation may charge fees and accept personal, corporate, and governmental grants or ' +
                'gifts to secure the funds necessary for the acquisition and development of land and capital ' +
                'improvements and to provide for programs and services in accordance with these stated purposes.'
        }
    ]
};
const ARTICLE_13: ByLawArticleData = {
    key: 'XIII',
    title: 'Nonprofit',
    text:
        'This Corporation is not organized for pecuniary profit, and it shall not have any power to issue ' +
        'certificates or stock or declare dividends, and no part of its net earning shall inure to the benefit of any ' +
        'member, director, officer, or individual. The balance, if any, of all money received by BSC from its ' +
        'operation, after payment in full of all debts and obligations of the carrying out the stated purpose or ' +
        'purposes of BSC consistent with laws and regulations applicable to a nonprofit corporation governed by ' +
        'the provisions of Section 501c(3) of the Internal Revenue Code of 1954, as amended, and Chapter 504A, ' +
        'Code of Iowa, as amended.'
};
const ARTICLE_14: ByLawArticleData = {
    key: 'XIV',
    title: 'Amendment of Bylaws',
    text:
        'These Bylaws may be altered, repealed, or amended only by the affirmative vote of two-thirds of the ' +
        'Board of Directors present and voting at any meeting of Board of Directors providing that notice of such ' +
        'amendment has been mailed to all Directors not later than five (5) days in advance of the meeting.'
};
const ARTICLE_15: ByLawArticleData = {
    key: 'XV',
    title: 'Fiscal Year',
    text:
        'The fiscal year of this Corporation shall be from the first day of July through the last day of June. ' +
        'Article XVI. Approval and Adoption'
};
const ARTICLE_16: ByLawArticleData = {
    key: 'XVI',
    title: 'Approval and Adoption',
    text:
        'The undersigned President of the Bondurant Soccer Club hereby certifies that the foregoing is the\n' +
        'Constitution of the Bondurant Soccer Club as amended on change to appropriate date.'
};
export const BY_LAWS: ByLawsData = {
    title: 'Bondurant Soccer Club Constitution and By-Laws',
    location: 'Bondurant, Iowa',
    signature: 'Soccer Club President',
    date: '04/14',
    articles: [
        ARTICLE_1,
        ARTICLE_2,
        ARTICLE_3,
        ARTICLE_4,
        ARTICLE_5,
        ARTICLE_6,
        ARTICLE_7,
        ARTICLE_8,
        ARTICLE_9,
        ARTICLE_10,
        ARTICLE_11,
        ARTICLE_12,
        ARTICLE_13,
        ARTICLE_14,
        ARTICLE_15,
        ARTICLE_16
    ]
};
