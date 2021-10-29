import React from 'react';
import {Card, CardBody, Paragraph} from '@material-tailwind/react';

export const ContentCard = ({children}) => {
    return (
        <Card>
            <CardBody>
                <Paragraph>
                    {children}
                </Paragraph>
            </CardBody>
        </Card>
    )
}
