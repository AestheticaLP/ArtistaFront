/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum TagType {
    ArtForm = 'ARTFORM',
    Genre = 'GENRE'
}

export type Tag = {
    id: string;
    name: string;
    type: TagType;
}
