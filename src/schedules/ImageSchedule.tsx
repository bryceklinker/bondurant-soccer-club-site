import React, { FunctionComponent, PropsWithChildren } from 'react';
import { CollapsiblePanel, Section, SectionTitle } from '../common/components';

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
