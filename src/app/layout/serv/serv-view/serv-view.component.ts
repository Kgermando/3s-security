import { Component, OnInit } from '@angular/core';
import { ServModel } from '../model/service.model';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-serv-view',
  templateUrl: './serv-view.component.html',
  styleUrl: './serv-view.component.scss'
})
export class ServViewComponent implements OnInit {
  isLoading = false;
  item!: ServModel;

  dataListService: ServModel[] = [];

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService) { }


  ngOnInit(): void {
    const title_url = this.route.snapshot.params['title_url'];
    this.isLoading = true;
    this.servicesService.refreshData$.subscribe(() => {
      this.fetchData(title_url);
    });
    this.fetchData(title_url);

    this.servicesService.refreshDataList$.subscribe(() => {
      this.fetchDataOther();
    });
    this.fetchDataOther();
  }

  fetchData(title_url: string) {
    this.servicesService.getTitle(title_url).subscribe(response => {
      this.item = response.data; 
      this.isLoading = false;
    });
  }

  fetchDataOther() {
    this.servicesService.getAllLimit().subscribe(response => {
      this.dataListService = response.data;
    });
  }


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }


}
