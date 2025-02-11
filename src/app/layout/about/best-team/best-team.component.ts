import { Component, Input } from '@angular/core';
import { TeamModel } from '../../team/model/team.model';

@Component({
  selector: 'app-best-team',
  templateUrl: './best-team.component.html',
  styleUrl: './best-team.component.scss'
})
export class BestTeamComponent {
  @Input() dataListteamList: TeamModel[] = [];
}
