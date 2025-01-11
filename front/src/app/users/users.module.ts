import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UsersListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  exports: [
    UsersListComponent,
    UserFormComponent
  ]
})
export class UsersModule {}
