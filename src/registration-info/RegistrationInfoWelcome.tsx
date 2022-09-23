import React, { FunctionComponent } from 'react';
import {
    CollapsiblePanel,
    Paragraph,
    Section,
    SectionTitle
} from '../common/components';

export const RegistrationInfoWelcome: FunctionComponent = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={
                    <SectionTitle>
                        Welcome to the Bondurant Soccer Club Registration Page
                    </SectionTitle>
                }>
                <Paragraph>
                    Sportsmanship, conduct, and our policies within the
                    Bondurant Soccer Club are many items that we hold imperative
                    to our players and parents. Please read the below
                    information and let's continue to have a great season of
                    soccer!
                </Paragraph>
                <Paragraph>
                    General Policy
                    <br />
                    Fees are payable upon registration. No player may be
                    assigned to a team or participate in club activities until
                    all applicable fees have been paid and other requirements of
                    the registration process has been completed. A player’s
                    assignment priority will be based on the date on which
                    registration is fully completed.
                </Paragraph>

                <Paragraph>
                    A late fee may be charged for registrations received after a
                    pre-announced deadline.
                </Paragraph>

                <Paragraph>
                    Registration fees are accepted under a “No Refunds” policy.
                    Further provisions of this policy permit refunds under
                    specific circumstances.
                </Paragraph>

                <Paragraph>
                    Gift certificates donated by the club to community
                    organizations may be used in place of a registration fee.
                    Gift certificates cover the standard registration fee only;
                    they do not include any applicable late fees or other
                    charges.
                </Paragraph>

                <Paragraph>
                    Fees are paid for the current season or program, and cannot
                    be carried forward to a future season or program.
                </Paragraph>

                <Paragraph>
                    A player is considered to have withdrawn when either the
                    player’s parent or his/her coach has notified the Registrar.
                    The Registrar will determine eligibility for a refund based
                    on the circumstances and the date of that notification. Note
                    that there is no burden on the coach to notify the Registrar
                    of a withdrawal in time for a refund; if a parent is seeking
                    a refund it is his/her sole responsibility to contact the
                    Registrar directly.
                </Paragraph>

                <Paragraph>
                    If a family’s membership is terminated involuntarily, or if
                    an individual player is suspended from playing for the
                    remainder of the season, the family may request a refund of
                    fees with Registrar. Any such refund must be approved by the
                    Board, and, if granted, will be prorated according to the
                    number of past games for which the player or family was
                    eligible, regardless of whether the player participated, and
                    will take into account any family-maximum discount that the
                    family may have received. This provision may be modified by
                    other policies that deal with specific circumstances.
                </Paragraph>

                <Paragraph>
                    Program Late Fees There is a $35 late fee for players
                    registering after registration closes.
                </Paragraph>

                <Paragraph>
                    Late registering players will be assigned on a
                    space-available basis to teams as necessary to even out
                    roster numbers. If BSC teams are full, the registrar may be
                    able to help find spots on teams from neighboring clubs.
                </Paragraph>
            </CollapsiblePanel>
        </Section>
    );
};
