import {UUID} from 'angular2-uuid';
import {Message} from '../message/message-model';

/**
 * Thread represents a group of Users exchanging Messages
 */
export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: string, name?: string, avatarSrc?: string) {
    this.id = id || UUID.UUID();
    this.name = name || null;
    this.avatarSrc = avatarSrc || null;
    this.lastMessage = null;
  }
}
