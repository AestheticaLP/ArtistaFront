/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum MediaType {
    Image = 'IMAGE',
    Video = 'VIDEO',
    Audio = 'AUDIO'
}

export type Media = {
    id: string,
    url: string,
    title: string,
    type: MediaType,
}
