import dayjs from 'dayjs';
import { FilmGeneratorInterface } from './film-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems} from '../../core/helpers/index.js';

export default class FilmGenerator implements FilmGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const filmName = getRandomItem<string>(this.mockData.filmNames);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const genre = getRandomItem<string>(this.mockData.genres);
    const releaseDate = getRandomItem<number>(this.mockData.releaseDates);
    const rating = generateRandomValue(1, 10);
    const prevVideo = getRandomItem<string>(this.mockData.prevVideos);
    const video = getRandomItem<string>(this.mockData.videos);
    const actors = getRandomItems<string>(this.mockData.actors).join(';');
    const director = getRandomItem<string>(this.mockData.directors);
    const duration = getRandomItem<number>(this.mockData.durations);
    const comments = generateRandomValue(1, 30);
    const user = getRandomItem<string>(this.mockData.userNames);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = this.mockData.avatarPaths && getRandomItem<string>(this.mockData.avatarPaths);
    const password = getRandomItem<string>(this.mockData.passwords);
    const poster = getRandomItem<string>(this.mockData.posters);
    const backgroundImage = getRandomItem<string>(this.mockData.backgroundImages);
    const backgroundColor = getRandomItem<string>(this.mockData.backgroundColors);
    const postDate = dayjs().subtract(generateRandomValue(1, 7), 'day').toISOString();

    return [
      filmName, description, postDate,
      genre, releaseDate, rating, prevVideo, video, actors, director, duration, comments, user, email, avatarPath, password, poster, backgroundImage, backgroundColor,
    ].join('\t');
  }
}
