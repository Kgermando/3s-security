import { Component, Input } from '@angular/core';
import { BlogModel } from '../../blog/model/blog.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrl: './home-blogs.component.scss'
})
export class HomeBlogsComponent {

  @Input() dataList: BlogModel[] = []
 

  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }
}
