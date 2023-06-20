import typegoose, {getModelForClass, defaultClasses, Ref} from '@typegoose/typegoose';
import { Actor } from '../../types/actor.type';
import { Genre } from '../../types/genre.type';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

@modelOptions({
  schemaOptions: {
    collection: 'films'
  }
})
export class FilmEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true, minlength: 2, maxlength: 100})
  public filmName!: string;

  @prop({required: true, minlength: 20, maxlength: 1024})
  public description!: string;

  @prop({required: true, default: new Date()})
  public postDate!: Date;

  @prop({required: true, type: () => String})
  public genre!: Genre[];

  @prop({required: true})
  public releaseDate!: Date;

  @prop({required: true, default: 0})
  public rating!: number;

  @prop({required: true, trim: true})
  public prevVideo!: string;

  @prop({required: true, trim: true})
  public video!: string;

  @prop({required: true, type: () => String})
  public actors!: Actor[];

  @prop({required: true, minlength: 2, maxlength: 50})
  public director!: string;

  @prop({required: true})
  public duration!: number;

  @prop({required: true})
  public comments!: number;

  @prop({required: true, ref: UserEntity})
  public userId!: Ref<UserEntity>;

  @prop({required: true, trim: true})
  public poster!: string;

  @prop({required: true, trim: true})
  public backgroundImage!: string;

  @prop({required: true, trim: true})
  public backgroundColor!: string;

}

export const FilmModel = getModelForClass(FilmEntity);
