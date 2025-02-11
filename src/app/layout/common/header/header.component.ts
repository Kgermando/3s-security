import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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
}
