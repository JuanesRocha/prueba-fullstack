import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User = { name: '', email: '', age: 0 };
  @Output() formSubmit = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  saveUser(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(() => {
        this.toastr.success('Usuario actualizado correctamente.', 'Éxito');
        this.formSubmit.emit();
      });
    } else {
      this.userService.createUser(this.user).subscribe(() => {
        this.toastr.success('Usuario creado correctamente.', 'Éxito');
        this.formSubmit.emit();
      });
    }
  }
}
