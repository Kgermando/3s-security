import { Component } from '@angular/core';
import { services } from '../../shared/data/content.json';
import { ServicesService } from './services.service';
import { ServModel } from './model/service.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.scss'
})
export class ServComponent {

  _data: any;
  _explore: any;

  dataList: ServModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;

  constructor(private services: ServicesService) {
    this._data = this.getDatas();
    this._explore = this.getExplore();
  }

  // ngOnInit(): void {
  //   this.services.refreshDataList$.subscribe(() => {
  //     this.fetchData();
  //   });
  //   this.fetchData();
  // }

  fetchData() {
    this.services.getPaginated(this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        this.dataList = response.data;
        this.totalPages = response.pagination.total_pages;
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchData();
  }


  getPageNumbers() {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }


  getDatas() {
    return services.sectionServices;
  }


  getExplore() {
    return services.sectionExplore;
  }
  
 
}
