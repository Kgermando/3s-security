import { Component, Input } from '@angular/core';
import { BlogModel } from '../../model/blog.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-side-blog',
  templateUrl: './side-blog.component.html',
  styleUrl: './side-blog.component.scss'
})
export class SideBlogComponent {
  @Input() item!: BlogModel;
  @Input() dataListBlog: BlogModel[] = [];


  public getLink(url: string) {
    const link = `${environment.urlFile}` //"http://localhost:8000/" 
    return link + url;
  }

}
