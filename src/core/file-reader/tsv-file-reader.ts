import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Film } from '../../types/film.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Film [] {
    if (!this.rawData) {
      return [];
    }
    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([filmName, description, postDate, genre, releaseDate, rating, prevVideo,
        video, actors, director, duration, comments, userName, email, avatarPath, poster,
        backgroundImage, backgroundColor]) => ({
        filmName,
        description,
        postDate: new Date(postDate),
        genre: genre.split(';')
          .map((name) => ({name})),
        releaseDate: new Date(releaseDate),
        rating: Number(rating),
        prevVideo,
        video,
        actors: actors.split(';')
          .map((name) => ({name})),
        director,
        duration: Number(duration),
        comments: Number(comments),
        user: {userName, email, avatarPath},
        poster,
        backgroundImage,
        backgroundColor
      }));
  }

}
