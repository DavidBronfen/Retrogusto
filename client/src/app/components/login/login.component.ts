import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { LoginAction } from '../../actions/login';
import { ILogin } from '../../models/login';


@Component({
  selector: 'rg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginComponent>,
    private store: Store<fromRoot.State>,
  ) {
  }

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {
    const loginInfo = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    } as ILogin;
    this.store.dispatch(new LoginAction(loginInfo));
  }

  private createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        // tslint:disable-next-line
        this.patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      'password': new FormControl('', Validators.required),
    });
  }

  private patternValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value;
      if (value === '') {
        return null;
      }
      return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
