import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
     * Shows the current state of navigation menu
     * @ignore
     */
  @Input() isActive = false;

  /**
   * Changing the state of natigation menu
   */
  toggleMenu() {
    this.isActive = !this.isActive;
  }

  /**
   * Closes the navigation menu
   */
  closeMenu() {
    this.isActive = false;
  }
}
