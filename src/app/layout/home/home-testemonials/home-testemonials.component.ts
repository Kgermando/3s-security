import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-testemonials',
  templateUrl: './home-testemonials.component.html',
  styleUrl: './home-testemonials.component.scss'
})
export class HomeTestemonialsComponent {

  @Input() _data: any; 
}
 