import { Component, OnInit } from '@angular/core';

import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
