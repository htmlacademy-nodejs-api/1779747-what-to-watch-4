import { Film } from '../../types/film.type.js';
import { Genre } from '../../types/genre.type.js';

export function createFilm(filmData: string): Film {
  const [
    filmName,
    description,
    postDate,
    genre,
    releaseDate,
    rating,
    prevVideo,
    video,
    actors,
    director,
    duration,
    comments,
    userName,
    email,
    avatarPath,
    password,
    poster,
    backgroundImage,
    backgroundColor
  ] = filmData.replace('\n', '').split('\t');

  const user = {
    userName,
    email,
    avatarPath,
    password
  };
  return {
    filmName,
    description,
    postDate: new Date(postDate),
    genre: genre.split('; ') as Genre[],
    releaseDate: new Date(releaseDate),
    rating: Number(rating),
    prevVideo,
    video,
    actors: actors.split(';')
      .map((name) => ({name})),
    director,
    duration: Number(duration),
    comments: Number(comments),
    user,
    poster,
    backgroundImage,
    backgroundColor
  };
}
