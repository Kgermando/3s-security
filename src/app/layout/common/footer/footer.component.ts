import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, Scroll } from '@angular/router';
import { pageUrl, route } from '../../../shared/constants';
import { formatDate } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';
import { BlogsService } from '../../blog/blogs.service';
import { BlogModel } from '../../blog/model/blog.model';
import { NewsletterService } from '../newsletter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  year: string;
  dataListBlog: BlogModel[] = [];

  isLoading = false; 
  newsletter: string = '';

  /**
   * Defines theme for the footer section
   */
  @Input() theme: string = "footer-dark";

  /**
   * Constructor
   * @param router App navigation router
   */
  constructor(private router: Router, 
    public authService: AuthService,
    private blogService: BlogsService,
    private newsLetterService: NewsletterService,
    private toastr: ToastrService,
  ) {
    this.year = formatDate(new Date(), 'yyyy', 'en');

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setFooterFor(event.url);
      }
    });
  }


  ngOnInit(): void {
  //   this.blogService.refreshDataList$.subscribe(() => {
  //     this.fetchDataBlog();
  //   });
  //   this.fetchDataBlog();
  // }

  // fetchDataBlog() {
  //   this.blogService.getAllLimit().subscribe(response => {
  //     this.dataListBlog = response.data;
  //   });
  }

  onSubmit() {
    this.isLoading = true; 
    const formData = new FormData()
    formData.append('newsletter', this.newsletter);

    this.newsLetterService.create(formData).subscribe({
      next: (event) => { 
        this.newsletter = ''; 
        this.isLoading = false; 
        
        this.toastr.success('Abonnement effectuée avec succès!', 'Success!'); 
      },
      error: (e) => {
        this.isLoading = false;
        console.log("error", e);
      }
    });
  }

  /**
   * Selecting theme for current footer
   * @param url endpoint name for current page
   */
  setFooterFor(url: string) {
    if (url == pageUrl(route.pages.features.footer.LIGHT)) {
      this.theme = "footer-light";
    } else {
      this.theme = "footer-dark";
    }
  }
}
