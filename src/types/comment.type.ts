import { User } from './user.type.js';

export type Comment = {
    textComment: string;
    rating: number;
    postDate: Date;
    user: User;
}
