import { Component } from '@angular/core';

@Component({
  selector: 'rg-root',
  template: `
    <rg-header></rg-header>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
}
