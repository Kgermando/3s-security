import { Component, Input } from '@angular/core';
import { TeamModel } from '../../team/model/team.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrl: './home-team.component.scss'
})
export class HomeTeamComponent {

  @Input() dataListteamList: TeamModel[] = [];


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }
}
