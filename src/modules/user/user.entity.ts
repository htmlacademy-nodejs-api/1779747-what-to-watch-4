import { User } from '../../types/user.type.js';
import typegoose, { defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { createSHA256 } from '../../core/helpers/index.js';

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({required: true, minlength: 1, maxlength: 15, default: ''})
  public userName: string ; 
  
  @prop({unique: true, match: /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true})
  public email: string;

  @prop({ required: false, default: '' })
  public avatarPath: string;

  @prop({ required: true, minlength: 6, maxlength: 12, default: '' })
  public password!: string;

  constructor(userData: User) {
    super();
    this.userName = userData.userName;
    this.email = userData.email;
    this.avatarPath = userData.avatarPath;

  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);