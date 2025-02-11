import { Component } from '@angular/core';
import { Team2Service } from './team2.service';
import { TeamModel } from './model/team.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  dataList: TeamModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;

  constructor(private team2Service: Team2Service) {

  }

  ngOnInit(): void {
    this.team2Service.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();
  }

  fetchData() {
    this.team2Service.getPaginated(this.currentPage, this.itemsPerPage)
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

}
