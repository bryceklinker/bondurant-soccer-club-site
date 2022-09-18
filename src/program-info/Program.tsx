import {
    CollapsiblePanel,
    Paragraph,
    PlainStack,
    ProgramInfo,
    ProgramInfoAttribute,
    Section,
    SectionTitle, SubTitle
} from '../common';
import {FunctionComponent} from 'react';
import {List} from '@fluentui/react';
import {SmartLink} from '../common/components/SmartLink';

export interface ProgramProps {
    program: ProgramInfo;
}

export const Program: FunctionComponent<ProgramProps> = ({program}) => {
    const attributes = program.attributes.map((a, i) => <ProgramAttribute key={i} attribute={a} />);
    return (
        <Section padded shadow>
            <CollapsiblePanel title={<SectionTitle>{program.title}</SectionTitle>}>
                {
                    program.description ? <Paragraph>{program.description}</Paragraph> : null
                }
                {attributes}
            </CollapsiblePanel>
        </Section>
    );
};


export interface ProgramAttributeProps {
    attribute: ProgramInfoAttribute;
}

export const ProgramAttribute: FunctionComponent<ProgramAttributeProps> = ({attribute}) => {
    return (
        <PlainStack>
            <PlainStack  horizontal verticalAlign={'center'}>
                <SubTitle>{attribute.name}:&nbsp;</SubTitle>
                {attribute.text ? <Paragraph>{attribute.text}</Paragraph> : null}
                {attribute.link ? <SmartLink link={attribute.link}/> : null}
            </PlainStack>
            <PlainStack className={'indent'}>
                {attribute.details
                    ? (
                        <PlainStack>
                            <List items={attribute.details} onRenderCell={(item, i) => <Paragraph key={i}>{item}</Paragraph>}/>
                        </PlainStack>
                    )
                    : null}
            </PlainStack>
        </PlainStack>
    );
};
