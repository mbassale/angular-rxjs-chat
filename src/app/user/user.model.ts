
import {UUID} from 'angular2-uuid';

export class User {
  id: string;

  constructor(public name: string, public avatarSrc: string) {
    this.id = UUID.UUID();
  }
}
