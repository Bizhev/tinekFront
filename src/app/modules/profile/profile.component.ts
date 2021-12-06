import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service";
import { AccountInterface } from "./interfaces/account.interface";
import { CurrentUser, UserInterface } from "./interfaces/user.interface";
import {TODO_ANY} from "../../../types/currency.type";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private readonly _profileService: ProfileService
  ) {
  }
  users: UserInterface[] = [];
  accounts: AccountInterface[] = []

  toSetting(){
    console.log('Перехожу!');
  }
currentUser: CurrentUser  = {
  id: 0,
  fio: 'Сервер не доступен',
  currentAccountId: '0'
}

 ngOnInit() {
   this.fetchProfile();
   this.fetchAccounts();
  }
  fetchProfile(){
    this._profileService.fetchProfile()
      .subscribe((data: any) => {
        this.currentUser = data;
      });
  }
  // @deprecated
  fetchUsers(){
    this._profileService.fetchUsers()
      .subscribe((data:any) => {
        this.users = data;
      });
  }
  fetchAccounts(){
    this._profileService.fetchAccounts()
      .subscribe((accounts: TODO_ANY) =>{
      console.log({ accounts })
      this.accounts = accounts;
    })
  }

  changeAccount(account: AccountInterface){
    this._profileService.changeAccount(account.id)
      .subscribe(data=>{
        console.log({ data });
        this.fetchProfile();
      })
  }

}
