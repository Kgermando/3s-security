import { AfterViewInit, Component, OnInit } from '@angular/core';
import { home1 } from '../../shared/data/content.json';
import { Home1Service } from './home1.service';
import { BlogModel } from '../blog/model/blog.model';
import { BlogsService } from '../blog/blogs.service';
import { HomeSliderModel } from './model/homeSlider.model'; 
import { PartenaireModel } from './model/partenaire.model';
import { PartenaireHomeService } from './partenaire-home.service';
import { Team2Service } from '../team/team2.service';
import { TeamModel } from '../team/model/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataListHomeSlider: HomeSliderModel[] = [];
  dataListBlog: BlogModel[] = [];
  dataListPartenaires: PartenaireModel[] = [];
  dataListteamList: TeamModel[] = [];


  _data: any;
  /**
     * Constructor
     * @param home1Service Data service for home page style 1
     */
  constructor(
    private home1Service: Home1Service,
    private blogService: BlogsService,
    private team2Service: Team2Service,
    private partenaireService: PartenaireHomeService,
    
  ) {
    this._data = this.getData();
  } 


  ngOnInit(): void {
    // this.blogService.refreshDataList$.subscribe(() => {
    //   this.fetchDataHomeSlider();
    // });
    // this.fetchDataHomeSlider();

    // this.blogService.refreshDataList$.subscribe(() => {
    //   this.fetchDataBlog();
    // });
    // this.fetchDataBlog();

    // this.team2Service.refreshDataList$.subscribe(() => {
    //   this.fetchDataTeam();
    // });
    // this.fetchDataTeam();

    // this.partenaireService.refreshDataList$.subscribe(() => {
    //   this.fetchDataPartenaire();
    // });
    // this.fetchDataPartenaire();
  }


 
  fetchDataBlog() {
    this.blogService.getAllLimit().subscribe(response => {
      this.dataListBlog = response.data;
    });
  }

  fetchDataHomeSlider() {
    this.home1Service.getAllLimit().subscribe(response => {
      this.dataListHomeSlider = response.data;
    });
  }

  fetchDataTeam() {
    this.team2Service.getAllLimit().subscribe(response => {
      this.dataListteamList = response.data;
    });
  }

  fetchDataPartenaire() {
    this.partenaireService.getAll().subscribe(response => {
      this.dataListPartenaires = response.data;
     
    });
  }


  getData() {
    return home1;
  }


}
