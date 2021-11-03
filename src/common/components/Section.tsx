import React, {FunctionComponent} from 'react';

export interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    inverted?: boolean;
}

export const Section: FunctionComponent<SectionProps> = ({children, ...rest}) => {
    return (
        <section {...rest}>
            {children}
        </section>
    )
}
