import { AfterViewInit, Component, Input } from '@angular/core';
import { HomeSliderModel } from '../model/homeSlider.model';
import { environment } from '../../../../environments/environment';



/**
 * JQuery referene variable
 * @ignore
 */
declare var jQuery: any;

/**
 * Method having slider logic
 * @ignore
 */
declare function load_rev_slider_2(): any;


@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent implements AfterViewInit {
  // @Input() dataListHomeSlider: HomeSliderModel[] = [];

 
  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore 
   */
  ngAfterViewInit(): void {
    try {
      (function ($) {
        setTimeout(function () {
          load_rev_slider_2();
        }, 100);
      })(jQuery);
    } catch (e) { }
  }

  // public getLink(url: string) {
  //   const link = `${environment.urlFile}` //"http://localhost:8000/" 
  //   return link + url;
  // }

}
