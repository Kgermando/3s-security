import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../model/blog.model';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss'
})
export class BlogViewComponent implements OnInit {
  isLoading = false;
  item!: BlogModel;

  dataListBlog: BlogModel[] = [];

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService) { }


  ngOnInit(): void {
    const title_url = this.route.snapshot.params['title_url'];
    this.isLoading = true;
    this.blogService.refreshData$.subscribe(() => {
      this.fetchData(title_url);
    });
    this.fetchData(title_url);

    this.blogService.refreshDataList$.subscribe(() => {
      this.fetchDataOther();
    });
    this.fetchDataOther();
  }

  fetchData(title_url: string) {
    this.blogService.getTitle(title_url).subscribe(response => {
      this.item = response.data; 
      this.isLoading = false;
    });
  }

  fetchDataOther() {
    this.blogService.getAllLimit().subscribe(response => {
      this.dataListBlog = response.data;
    });
  }


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }


}
