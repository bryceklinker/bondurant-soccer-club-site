import { FC } from 'react';
import { Section } from '../../common/components/Section';
import { SectionTitle } from '../../common/components/SectionTitle';
import { Paragraph } from '../../common/components/Paragraph';
import { CollapsiblePanel } from '../../common/components/CollapsiblePanel';
import { PlainStack } from '../../common/components/PlainStack';
import { SubTitle } from '../../common/components/SubTitle';
import { SmartLink } from '../../common/components/SmartLink';
import { ProgramInfoAttribute } from '../../common/state/program-info-attribute';
import { ProgramInfo } from '../../common/state/program-info';

export type ProgramProps = {
    program: ProgramInfo;
};

export const Program: FC<ProgramProps> = ({ program }) => {
    const attributes = program.attributes.map((a, i) => (
        <ProgramAttribute key={i} attribute={a} />
    ));
    return (
        <Section padded shadow>
            <CollapsiblePanel
                title={<SectionTitle>{program.title}</SectionTitle>}>
                {program.description ? (
                    <Paragraph>{program.description}</Paragraph>
                ) : null}
                {attributes}
            </CollapsiblePanel>
        </Section>
    );
};

export type ProgramAttributeProps = {
    attribute: ProgramInfoAttribute;
};

export const ProgramAttribute: FC<ProgramAttributeProps> = ({ attribute }) => {
    const detailItems = attribute.details
        ? attribute.details.map((detail, index) => (
              <Paragraph key={index}>{detail}</Paragraph>
          ))
        : [];
    return (
        <PlainStack>
            <PlainStack horizontal>
                <SubTitle>{attribute.name}:&nbsp;</SubTitle>
                {attribute.text ? (
                    <Paragraph>{attribute.text}</Paragraph>
                ) : null}
                {attribute.link ? <SmartLink link={attribute.link} /> : null}
            </PlainStack>
            <PlainStack className={'indent'}>
                {detailItems.length > 0 ? (
                    <PlainStack>
                        <ul className={'list-none'}>{detailItems}</ul>
                    </PlainStack>
                ) : null}
            </PlainStack>
        </PlainStack>
    );
};
