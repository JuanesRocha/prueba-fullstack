import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  isModalOpen = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openModal(user?: User): void {
    this.selectedUser = user || { name: '', email: '', age: 0 };
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedUser = null;
  }

  handleFormSubmit(): void {
    this.getUsers();
    this.closeModal();
  }

  deleteUser(userId?: number): void {
    if (userId) {
      if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        this.userService.deleteUser(userId).subscribe(() => {
          this.users = this.users.filter(user => user.id !== userId);
          this.toastr.success('Usuario eliminado correctamente.', 'Éxito');
        });
      }
    }
  }
}
