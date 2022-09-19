import {
    CollapsiblePanel,
    Paragraph,
    PlainStack,
    ProgramInfo,
    ProgramInfoAttribute,
    Section,
    SectionTitle, SubTitle,
    SmartLink
} from '../common';
import {FunctionComponent} from 'react';
import {ListItem, UnorderedList} from '@chakra-ui/react';

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
    const details = attribute.details || [];
    const items = details.map((item, index) => (
        <ListItem key={index}>
            <Paragraph>
                {item}
            </Paragraph>
        </ListItem>
    ));
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
                            <UnorderedList>
                                {items}
                            </UnorderedList>
                        </PlainStack>
                    )
                    : null}
            </PlainStack>
        </PlainStack>
    );
};
