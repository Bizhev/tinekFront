import { Component, OnInit } from '@angular/core';
import { TODO_ANY } from "../../../../types/currency.type";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  user: TODO_ANY = {
    fio: '',
    name: '',
    token: '',
  };
  constructor(
    private readonly _userService: UserService
  ) { }


  ngOnInit(): void {
  }
  userSave(data: TODO_ANY){
    this._userService.userSave(data)
      .subscribe((res: TODO_ANY)=>{
        console.log({ res })
      })
  }
}
