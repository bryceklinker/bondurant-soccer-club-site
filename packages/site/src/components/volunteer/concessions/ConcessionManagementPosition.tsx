import { FC } from 'react';
import { CollapsiblePanel } from '../../../common/components/CollapsiblePanel';
import { SubTitle } from '../../../common/components/SubTitle';
import { TreatTickets } from './TreatTickets';
import {
    useConcessionSignupLink,
    useConcessionsLocation,
    useDirectorOfConcessionsMailLink
} from './hooks';
import { ConcessionStandDutyAndSignup } from './ConcessionStandDutyAndSignup';
import {Section} from '../../../common/components/Section';
import {SectionTitle} from '../../../common/components/SectionTitle';

export const ConcessionManagementPosition: FC = () => {
    const concessionLocation = useConcessionsLocation();
    const signupLink = useConcessionSignupLink();
    const contactLink = useDirectorOfConcessionsMailLink();

    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>Concession Management</SectionTitle>}>
                <TreatTickets location={concessionLocation} />
                <ConcessionStandDutyAndSignup
                    signupLink={signupLink}
                    contactLink={contactLink}
                />
            </CollapsiblePanel>
        </Section>
    );
};
