import {environment} from '@env/environment';

export const API_URL = environment.url;

export const language = {
    default: 'en',
    supported: ['en', 'ru', 'hy']
};
