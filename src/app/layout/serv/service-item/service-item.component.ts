import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item', 
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input() _data: any;
}
