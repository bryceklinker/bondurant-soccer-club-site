import { FunctionComponent, PropsWithChildren } from 'react';
import { Section } from '../common/components/Section';
import { CollapsiblePanel } from '../common/components/CollapsiblePanel';
import { SectionTitle } from '../common/components/SectionTitle';

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
                {children}
            </CollapsiblePanel>
        </Section>
    );
};
