import { Component, Input } from '@angular/core';
import { PartenaireModel } from '../model/partenaire.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home-partenaires',
  templateUrl: './home-partenaires.component.html',
  styleUrl: './home-partenaires.component.scss'
})
export class HomePartenairesComponent {

  @Input() dataListPartenaires: PartenaireModel[] = [];


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }

}
