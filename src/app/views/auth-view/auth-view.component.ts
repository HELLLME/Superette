import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  newAuth: FormGroup;
  constructor(private authService: AuthService,
     private router: Router , 
     private fb : FormBuilder) {


 
}
  ngOnInit() {

    this._initForm();

  }


  _initForm() {
    this.newAuth = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });


  }
  onSignIn() {
   const email = this.newAuth.value.email;
    const password = this.newAuth.value.password;

    this.authService.checkAuth(email, password)
      .then(
        () => {
          this.router.navigate(['produits']);
        },
      
      );
  }

  onSubmitNewAuth()
  {
    console.log('Form submitted', this.newAuth.value);
  }
}
