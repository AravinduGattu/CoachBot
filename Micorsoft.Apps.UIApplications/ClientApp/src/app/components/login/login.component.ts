import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isValidCredentials = true;
  public isInternalLogin: boolean;
  public userData: any; //Comment: User Model

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.isInternalLogin = false;
    this.loginForm = this.createLoginForm();
  }

  public createLoginForm() {
    return this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.isValidCredentials = true;
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    // Temporary process
    if (username === 'admin' && password === 'password') {
      this.router.navigate(['app/microsoft']);
    } else {
      this.isValidCredentials = false;
    }

    // Main Login Process

    const loginData = new FormData();
    loginData.append('username', username);
    loginData.append('password', password);

    // this.loginService.login(loginData).subscribe((response: any) => {
    //  alert('Login Success !!!!');
    // });


    //this.userData = UserData;
    //this.loginService.setSessionStorage('token', UserData.token);
  }

  internalSignIn() {
    this.isInternalLogin = true;
    this.isValidCredentials = true;
    this.loginForm.reset();
  }

  back() {
    this.isInternalLogin = false;
  }

}
