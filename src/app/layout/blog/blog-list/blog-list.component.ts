import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { blogs } from '../../../shared/data/content.json';
import { BlogModel } from '../model/blog.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  dataList: BlogModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;

  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
    this.blogService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();
  }

  fetchData() {
    this.blogService.getPaginated(this.currentPage, this.itemsPerPage)
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
    const link = `${environment.urlFile}`; //"http://localhost:8000/" 
    return link + url;
  }

}
