import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss'
})
export class WhatWeDoComponent {
  @Input() _data: any;
}
