import { EventEmitter, Injectable } from '@angular/core';
import CounterService from './counter.service';

@Injectable()
export default class UsersService {
  activeUsers = ['Ammar', 'Sajjad'];
  inActiveUsers = ['Kiran', 'Zubair'];

  constructor(private counterService: CounterService) {}
  setToActive(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
    this.counterService.InactiveToactiveCount();
  }

  setToInActive(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.activeToInactiveCount();
  }
}
