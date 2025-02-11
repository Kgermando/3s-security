import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import { PartenaireModel } from '../../../layout/home/model/partenaire.model';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrl: './partenaire-list.component.scss'
})
export class PartenaireListComponent implements OnInit {

  dataList: PartenaireModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;


  constructor(
    private router: Router,
    private partenaireService: PartenaireService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.partenaireService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();

  }

  fetchData() {
    this.partenaireService.getPaginated(this.currentPage, this.itemsPerPage)
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
      this.partenaireService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/partenaires/partenaire-list']);
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
