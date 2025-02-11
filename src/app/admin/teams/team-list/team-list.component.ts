import { Component, OnInit } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import { TeamModel } from '../../../layout/team/model/team.model';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent implements OnInit {

  dataList: TeamModel[] = []
  currentPage = 1;
  totalPages = 0;
  itemsPerPage = 10;


  constructor(
    private router: Router,
    private teamService: TeamService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.teamService.refreshDataList$.subscribe(() => {
      this.fetchData();
    });
    this.fetchData();

  }

  fetchData() {
    this.teamService.getPaginated(this.currentPage, this.itemsPerPage)
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
      this.teamService
        .delete(id)
        .subscribe({
          next: () => {
            this.toastr.info('Supprimé avec succès!', 'Success!');
            this.router.navigate(['/@admin/teams/team-list']);
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
