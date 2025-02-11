import { Component, OnInit } from '@angular/core';
import { TeamModel } from '../model/team.model';
import { Team2Service } from '../team2.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.scss'
})
export class TeamViewComponent implements OnInit {

  isLoading = false;
  item!: TeamModel;

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private team2Service: Team2Service) { }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.isLoading = true;
    this.team2Service.refreshDataList$.subscribe(() => {
      this.fetchData(id);
    });
    this.fetchData(id);
  }

  fetchData(id: any) {
    this.team2Service.get(Number(id)).subscribe(response => {
      this.item = response.data;
      console.log(this.item)
      this.isLoading = false;
    });
  }


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }

}
