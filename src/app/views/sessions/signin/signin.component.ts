import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { matxAnimations } from '../../../shared/animations/matx-animations';
import { SecurityService } from '../../../shared/services/security.service';
import Swal from 'sweetalert2';
import {json} from '@angular-devkit/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: matxAnimations,
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMsg = '';
  return: string;
  loading: boolean;

  constructor(
      private router: Router,
      private securityService: SecurityService
  ) {
  }

  form: FormGroup;

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  signin() {
    if (this.signinForm.valid) {
      const signinData = this.signinForm.value;
      this.securityService.login(signinData).subscribe(
          (authenticationResponse) => {
            this.securityService.saveToken(authenticationResponse);
            this.router.navigate(['/']);
          },
          // (error) => (this.errors = parseWebAPIErrors(error))
          (error) => (
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: JSON.stringify(error.error).toString(),
              }))
      );
    }
  }
}
