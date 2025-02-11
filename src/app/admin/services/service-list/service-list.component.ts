import { Component, OnInit } from '@angular/core';
import { ServModel } from '../../../layout/serv/model/service.model';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent implements OnInit {

  dataList: ServModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;


  constructor(
    private router: Router,
    private serviceService: ServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.serviceService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();

  }

  fetchData() {
    this.serviceService.getPaginated(this.currentPage, this.itemsPerPage)
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
      this.serviceService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/services/service-list']);
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
