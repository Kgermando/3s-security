import { Component, OnInit } from '@angular/core'; 
import { AdminBlogService } from '../admin-blog.service';
import { BlogModel } from '../../../layout/blog/model/blog.model';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrl: './admin-blog-list.component.scss'
})
export class AdminBlogListComponent implements OnInit {

  dataList: BlogModel[] = [] 
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10; 


  constructor(
    private router: Router, 
    private blogService: AdminBlogService,
    private toastr: ToastrService
  ) {}

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


  delete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enregistrement ?')) {
      this.blogService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/blogs/blog-list']);
          },
          error: err => {
            this.toastr.error('Une erreur s\'est produite!', 'Oupss!');
            console.log(err);
          }
        }
        );
    }
  }
}
