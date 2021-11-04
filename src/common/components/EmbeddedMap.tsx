import React, {FunctionComponent} from 'react';

interface EmbeddedMapProps {
    url: string;
    height?: number;
    width?: number;
}

export const EmbeddedMap: FunctionComponent<EmbeddedMapProps> = ({url, height = 450, width = 600}) => {
    return (
        <div dangerouslySetInnerHTML={{__html: `<iframe src="${url}" width="${width}" height="${height}" allowfullscreen="" loading="lazy"/>`}} />
    )
}
