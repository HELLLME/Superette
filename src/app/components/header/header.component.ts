import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLoginButton: boolean = false;

  constructor(private authService: AuthService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.checkCurrentRoute();
  }

  checkCurrentRoute() {
    const currentPath = this.location.path();
    this.showLoginButton = currentPath === '/available-products';
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }
}
