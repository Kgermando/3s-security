import { Component, Input } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { route } from '../shared/constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  /**
   * Defines header type
   */
  @Input() header: string = "2";

  /**
   * Constructor
   * @param router App navigation router
   */
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setHeaderFor(event.url)
      }
    });
  }

  /**
   * Logic for selecting header type as per current 'home' page
   * @param url endpoint name for current page
   */
  setHeaderFor(url: string) {
    if (url === "/" + route.home.HOME1
      || url === "/") {
      this.header = "1";
    } else if (url === "/" + route.home.HOME3) {
      this.header = "3";
    } else {
      this.header = "2";
    }
  }
}
