import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';

import * as loginAction from '../../actions/login';
import * as fromRoot from '../../reducers';


@Component({
    selector: 'rg-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public showLogin: boolean;

  constructor(
    private store: Store<fromRoot.State>,
    public dialog: MatDialog,
  ) {
    // this.store.select(fromRoot.getLoginPopupState).subscribe(
    //   loginPopupState => this.showLogin = loginPopupState
    // );
  }

  toggleLogin() {
    // this.store.dispatch(new loginAction.ToggleLoginPopupAction());
    let dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'login-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.warn(result);
      console.log('The dialog was closed');
    });

  }
}
