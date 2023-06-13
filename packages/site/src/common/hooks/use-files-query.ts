export type FileNode = {
    id: string;
    name: string;
    publicURL: string;
};

export type StaticQueryResult = {
    allFile?: {
        edges?: [
            {
                node?: FileNode;
            }
        ];
    };
};
