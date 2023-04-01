import {FunctionComponent, PropsWithChildren} from 'react';
import {Section} from '../../common/components/Section';
import {CollapsiblePanel} from '../../common/components/CollapsiblePanel';
import {SectionTitle} from '../../common/components/SectionTitle';
import {RowFlex} from '../../common/layout/RowFlex';

export type ImageScheduleProps = PropsWithChildren & {
    title: string;
};

export const ImageSchedule: FunctionComponent<ImageScheduleProps> = ({
                                                                         title,
                                                                         children
                                                                     }) => {
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>{title}</SectionTitle>}>
                <RowFlex>
                    {children}
                </RowFlex>
            </CollapsiblePanel>
        </Section>
    );
};
