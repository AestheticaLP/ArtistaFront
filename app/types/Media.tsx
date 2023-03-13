import { MediaType } from '../enums/MediaType.enum';

export type Media = {
    id: string,
    url: string,
    title: string,
    type: MediaType,
}
