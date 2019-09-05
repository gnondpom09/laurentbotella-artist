import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
// import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'lba-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // Properties 
  signupForm: FormGroup;
  passwordForm: FormGroup;
  usernameCtrl: FormControl;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;

  static passwordMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirm = group.get('confirm').value;
    return (password === confirm) ? null : { matchingError: true }
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private userService: UserService,
    private router: Router
  ) { 
    this.usernameCtrl = fb.control('', Validators.required);
    this.emailCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.confirmPasswordCtrl = fb.control('', Validators.required);
    this.passwordForm = fb.group({
      password: this.passwordCtrl,
      confirm: this.confirmPasswordCtrl
    }, { Validators: SignupComponent.passwordMatch });
    this.signupForm = fb.group({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      passwordForm: this.passwordForm
    });
  }

  ngOnInit() {
  }

  signup() {

  }

}
