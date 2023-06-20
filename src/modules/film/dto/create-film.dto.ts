import { Genre } from '../../../types/genre.type';
import { Actor } from '../../../types/actor.type';

export default class CreateFilmDto {
  filmName!: string;
  description!: string;
  postDate!: Date;
  genre!: Genre [];
  releaseDate!: Date;
  rating!: number;
  prevVideo!: string;
  video!: string;
  actors!: Actor[];
  director!: string;
  duration!: number;
  comments!: number;
  userId!: string;
  poster!: string;
  backgroundImage!: string;
  backgroundColor!: string;
}
