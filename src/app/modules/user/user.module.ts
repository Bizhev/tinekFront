import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { UserAddComponent } from './user-add/user-add.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {mixinColor} from "@angular/material/core";




@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
  ],
  exports: [UserComponent],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class UserModule { }
