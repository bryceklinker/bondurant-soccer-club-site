import { StaticQueryDocument, useStaticQuery } from 'gatsby';
import { FileNode } from './use-files-query';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageFile = FileNode & {
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
    };
};

export type ImageQueryResult = {
    allFile?: {
        nodes?: ImageFile[];
    };
};
