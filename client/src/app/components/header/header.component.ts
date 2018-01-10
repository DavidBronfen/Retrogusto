import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { SearchComponent } from '../search/search.component';

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
  ) {
    this.store.select(fromRoot.getLoginPopupState).subscribe(
      loginPopupState => this.showLogin = loginPopupState
    );
  }

  toggleLogin() {
    this.store.dispatch(new loginAction.ToggleLoginPopupAction());
  }
}
