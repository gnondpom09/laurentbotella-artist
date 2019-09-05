import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'lba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
        // Init login form
        this.emailCtrl = this.fb.control('', Validators.required);
        this.passwordCtrl = this.fb.control('', Validators.required);
        this.loginForm = this.fb.group({
          email: this.emailCtrl,
          password: this.passwordCtrl
        });
   }

  ngOnInit() {
  }
  /**
   * Connect to app
   */
  login() {
    this.authService.signIn(this.emailCtrl.value, this.passwordCtrl.value)
      .then(() => {
        // Redirect to home page
        this.router.navigateByUrl('/');
      })
  }

}
