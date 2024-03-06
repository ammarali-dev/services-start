import { Component } from '@angular/core';
import AccountsService from './accounts.service';
import UsersService from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(
    private accountsService: AccountsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
