import {UUID} from 'angular2-uuid';

/**
 * User is the agent that sends messages
 */
export class User {
  id: string;

  constructor(public name: string, public avatarSrc: string) {
    this.id = UUID.UUID();
  }
}
