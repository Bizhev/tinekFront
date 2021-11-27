import { Component, OnInit, ViewChild } from '@angular/core';
import { _MatTableDataSource, MatTableDataSource } from "@angular/material/table";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatSort, Sort } from "@angular/material/sort";
import { TODO_ANY } from "../../../types/currency.type";
import { UserService } from "./user.service";
import { format } from "date-fns";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  ngOnInit(): void {
    this.fetchUsers();
  }

  displayedColumns: string[] = ['id', 'fio', 'name', 'isActive', 'created_at'];
  users: MatTableDataSource<unknown> = this.initTable([]);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private _userService: UserService,
    ) {}

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit() {
    this.users.sort = this.sort || null;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort | TODO_ANY) {
    console.log({ sortState });
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  fetchUsers(){
    this._userService.fetchUsers()
      .subscribe((data: TODO_ANY)=>{
        this.initTable(data)
    })
  }
  initTable(data: TODO_ANY[]): MatTableDataSource<unknown>{
   return this.users = new MatTableDataSource(data);
  }
  formatDate(date: string){
    return format(new Date(date), 'dd.MM.yyyy в hh:mm:ss');
  }
}
