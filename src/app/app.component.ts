import { Component } from '@angular/core';

import { routes } from "./public/public-routing.module";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'lba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'laurentbotella';
  pages: Route[];
  opened: boolean;

  constructor(private router: Router) {
    this.pages = routes;
  }
  openPage(page) {
    this.router.navigate([page]);
    this.closeNav();
  }
  closeNav() {
    this.opened = false;
  }
  toggle() {
    this.opened = !this.opened;
  }

}
