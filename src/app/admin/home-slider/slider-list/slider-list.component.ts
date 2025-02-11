import { Component, OnInit } from '@angular/core';
import { SliderService } from '../slider.service';
import { ToastrService } from 'ngx-toastr';
import { HomeSliderModel } from '../../../layout/home/model/homeSlider.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrl: './slider-list.component.scss'
})
export class SliderListComponent implements OnInit {

  dataList: HomeSliderModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;


  constructor(
    private router: Router,
    private sliderService: SliderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.sliderService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();

  }

  fetchData() {
    this.sliderService.getPaginated(this.currentPage, this.itemsPerPage)
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
      this.sliderService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/home/slider-list']);
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
