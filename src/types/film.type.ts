import { User } from './user.type.js';
import { Actor } from './actor.type.js';
import { Genre } from './genre.type.js';

export type Film = {
    filmName: string;
    description: string;
    postDate: Date;
    genre: Genre[];
    releaseDate: Date;
    rating: number;
    prevVideo: string;
    video: string;
    actors: Actor[];
    director: string;
    duration: number;
    comments: number;
    user: User;
    poster: string;
    backgroundImage: string;
    backgroundColor: string;

}
