import { Component, OnInit } from '@angular/core';
import UsersService from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  
})
export class ActiveUsersComponent implements OnInit {
  activeUsers = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
  }
  setToInactive(id: number) {
    this.usersService.setToInActive(id);
  }
}
