import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { aboutUs } from '../../shared/data/content.json';
import { Team2Service } from '../team/team2.service';
import { TeamModel } from '../team/model/team.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  _data: any;
  _whyChoose_Skills: any;
 /**
   * Constructor
   * @param aboutService About page data service
   */

 dataListteamList: TeamModel[] = [];
 
 constructor(
  private aboutService: AboutService,
  private team2Service: Team2Service,
 ) {
  this._data = this.getDatas();
 
  this._whyChoose_Skills = this.getWhyChooseSkills();
 } 


  ngOnInit(): void {
  //  this.team2Service.refreshDataList$.subscribe(() => {
  //     this.fetchDataTeam();
  //   });
  //   this.fetchDataTeam();
  }




 fetchDataTeam() {
  this.team2Service.getAllLimit().subscribe(response => {
    this.dataListteamList = response.data;
  });
}

  getDatas() {
    return aboutUs;
  }


  getWhyChooseSkills() {
    return {
      "sectionWhyChooseUs": aboutUs.sectionWhyChooseUs,
      "sectionSkills": aboutUs.sectionSkills
    }
  }

}
