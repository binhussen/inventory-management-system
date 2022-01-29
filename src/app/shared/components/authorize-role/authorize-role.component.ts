import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-authorize-role',
  templateUrl: './authorize-role.component.html',
  styleUrls: ['./authorize-role.component.scss'],
})
export class AuthorizeRoleComponent implements OnInit {
  now: Date = new Date();
  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {}

  @Input()
  role: string;


  public isAuthorized() {
    if (this.role) {
      return this.securityService.getRole() === this.role;
    } else {
      return this.securityService.isAuthenticated();
    }
  }
}
