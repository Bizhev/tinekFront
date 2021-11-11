import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service";
import {AccountInterface} from "./interfaces/account.interface";
import {CurrentUser, UserInterface} from "./interfaces/user.interface";

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

currentUser: CurrentUser  = {
  id: 0,
  fio: 'Сервер не доступен',
  accounts: [],
  currentAccountId: '0'
}

 ngOnInit() {
   this.fetchProfile();
   this.fetchUsers();
  }
  fetchProfile(){
    this._profileService.fetchProfile()
      .subscribe((data: any) => {
        this.currentUser = data;
      });
  }
  fetchUsers(){
    this._profileService.fetchUsers()
      .subscribe((data:any) => {
        this.users = data;
      });
  }

  changeUser(user: UserInterface){
    this._profileService.changeUser(user.id)
      .subscribe(data=>{
        this.fetchProfile();
      })
  }
  changeAccountId(account: AccountInterface) {
    this._profileService.changeAccountId(account.brokerAccountId)
      .subscribe(data=>{
        // если успешно
      })

  }

}
