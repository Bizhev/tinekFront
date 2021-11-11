import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [ProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class ProfileModule { }
