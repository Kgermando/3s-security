import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss'
})
export class HomeServicesComponent {

  @Input() _data: any;
}
