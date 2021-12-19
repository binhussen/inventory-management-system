import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../../shared/services/security.service';
import Swal from 'sweetalert2';
import {User} from '../../../shared/models/security.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  errors: string[] = [];

  ngOnInit(): void {}

  register(user: User) {
    this.errors = [];
    this.securityService.register(user).subscribe((authenticationResponse) => {
      this.router.navigate(['/users']);
    },
        // (error) => (this.errors = parseWebAPIErrors(error))
        (error) => (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: JSON.stringify(error.error).toString(),
            })));
  }
}
