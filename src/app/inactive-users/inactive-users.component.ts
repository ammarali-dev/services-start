import { Component, OnInit } from '@angular/core';
import UsersService from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  inActiveUsers = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.inActiveUsers = this.usersService.inActiveUsers;
  }
  setToactive(id: number) {
    this.usersService.setToActive(id);
  }
}
