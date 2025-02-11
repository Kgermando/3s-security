import { Component, OnInit } from '@angular/core';
import { NewsLetterModel } from './model/newsletter.model'; 
import { ToastrService } from 'ngx-toastr';
import { Newsletter2Service } from './newsletter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-letters',
  templateUrl: './news-letters.component.html',
  styleUrl: './news-letters.component.scss'
})
export class NewsLettersComponent implements OnInit {

  dataList: NewsLetterModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;


  constructor(
    private router: Router,
    private newsletterService: Newsletter2Service,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.newsletterService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();

  }

  fetchData() {
    this.newsletterService.getPaginated(this.currentPage, this.itemsPerPage)
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
      this.newsletterService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/newsLetters/newsLetter-list']);
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
