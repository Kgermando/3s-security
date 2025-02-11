import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-services',
  templateUrl: './about-us-services.component.html',
  styleUrl: './about-us-services.component.scss'
})
export class AboutUsServicesComponent {
  @Input() _data: any;
}
