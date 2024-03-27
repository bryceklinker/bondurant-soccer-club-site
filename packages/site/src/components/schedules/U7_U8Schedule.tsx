import {FC} from 'react';
import {Section} from '../../common/components/Section';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SectionTitle} from '../../common/components/SectionTitle';
import {U7_U8ProgramDetails} from '../program-info/U7_U8ProgramDetails';
import {ColumnFlex} from '../../common/layout/ColumnFlex';

const COED_SCHEDULE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC8Xfq9J6vkizXFYutdpSJffT_eTtCGNKRFIr2TrC8E7n2dKynMODmzhEV1qnSVw/pubhtml?gid=1738324114&amp;single=true&amp;widget=true&amp;headers=false'
const GIRLS_SCHEDULE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC8Xfq9J6vkizXFYutdpSJffT_eTtCGNKRFIr2TrC8E7n2dKynMODmzhEV1qnSVw/pubhtml?gid=1641014225&amp;single=true&amp;widget=true&amp;headers=false';

export const U7_U8Schedule: FC = () => {
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>U7/U8 Schedule</SectionTitle>}>
                <U7_U8ProgramDetails includeDates/>

                <CollapsiblePanel title={<SectionTitle>U7/U8 Coed Schedule</SectionTitle>}>
                    <ColumnFlex>
                        <iframe
                            style={{minHeight: '40em'}}
                            src={COED_SCHEDULE}></iframe>
                    </ColumnFlex>
                </CollapsiblePanel>

                <CollapsiblePanel title={<SectionTitle>U7/U8 Girls Schedule</SectionTitle>}>
                    <iframe
                        style={{minHeight: '40em'}}
                        src={GIRLS_SCHEDULE}></iframe>
                </CollapsiblePanel>
            </CollapsiblePanel>
        </Section>
    );
};
