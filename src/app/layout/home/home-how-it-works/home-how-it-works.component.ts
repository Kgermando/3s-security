import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-how-it-works',
  templateUrl: './home-how-it-works.component.html',
  styleUrl: './home-how-it-works.component.scss'
})
export class HomeHowItWorksComponent {

  @Input() _data: any;
}
