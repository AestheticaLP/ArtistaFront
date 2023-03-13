import { Media } from './Media';
import { Tag } from './Tag';

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum ContentWarning {
    None = 'NONE',
    Nudity = 'NUDITY',
    Violence = 'VIOLENCE',
    Other = 'OTHER'
}

export type Post = {
    id: string;
    postedBy: undefined; // TODO
    credits: undefined; // TODO
    url: string;
    title: string;
    description: string | null;
    location: string;
    tags: Array<Tag>;
    likeAmount: number;
    likedBy: undefined; // TODO
    reports: undefined; // TODO
    contentWarning: ContentWarning;
    media: Array<Media>;
}
