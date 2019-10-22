import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router,
              private loginService: LoginService) { }

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
    //if (username === 'admin' && password === 'password') {
    //  this.router.navigate(['app/microsoft']);
    //} else {
    //  this.isValidCredentials = false;
    //}

    // Main Login Process

    const loginData = new FormData();
    loginData.append('username', username);
    loginData.append('password', password);


    const data: any = { Username: username, Password: password}

    this.loginService.login(data).subscribe((response: any) => {

      if (response && response.token) {
        this.loginService.setSessionStorage('token', response.token);
        this.loginService.setSessionStorage('Username', response.userName);
        this.router.navigate(['app/microsoft']);
      } else {
        this.isValidCredentials = false;
      }

    }), (error: any) => {
      this.isValidCredentials = false;
    }
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
