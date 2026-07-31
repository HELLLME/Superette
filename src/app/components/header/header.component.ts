import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { filter } from 'rxjs';

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

     // Check every time navigation finishes..
     this.router.events
     .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe(() => {
       this.checkCurrentRoute();
     });
  }


  checkCurrentRoute() {
    const currentPath = this.location.path();
    this.showLoginButton = currentPath.startsWith('/available-products');
  }
  

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }
}
