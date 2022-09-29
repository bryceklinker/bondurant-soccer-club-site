import React, { FunctionComponent } from 'react';

import './EmbeddedMap.css';

interface EmbeddedMapProps {
    url: string;
    height?: number;
    width?: number;
    className?: string;
}

export const EmbeddedMap: FunctionComponent<EmbeddedMapProps> = ({
    url,
    height = 450,
    width = 600,
    className
}) => {
    return (
        <div
            className={'flex flex-1 embedded-map'}
            dangerouslySetInnerHTML={{
                __html: `<iframe src="${url}" width="${width}" height="${height}" allowfullscreen="" style="border:0;" loading="lazy"/>`
            }}
        />
    );
};
