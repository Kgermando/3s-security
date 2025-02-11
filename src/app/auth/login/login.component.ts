import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  year: string;

  isLoading = false;

  email: string = '';
  password: string = '';

  constructor(private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.year = formatDate(new Date(), 'yyyy', 'en');
  }


  onSubmit() {
    this.isLoading = true;
    const body = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(body).subscribe({
      next: (res) => { 
        localStorage.setItem('authToken', res.token);
        // this.authService.user().subscribe({
        //   next: (user) => {
        //     this.toastr.success(`Bienvenue ${user.fullname}! 🎉`, 'Success!');  
            
        //     this.router.navigate(['/@admin']);
        // this.isLoading = false;
        //   },
        //   error: (error) => {
        //     this.isLoading = false;
        //     this.router.navigate(['/auth/login']);
        //     console.log(error);
        //   }
        // }); 
        this.isLoading = false;
        this.toastr.success(`Bienvenue! 🎉`, 'Success!');  
        this.router.navigate(['/@admin']);
      },
      error: (e) => {
        this.isLoading = false;
        console.error(e);
        this.toastr.error(`${e.error.message}`, 'Oupss!');
        this.router.navigate(['/web']);
      }
    })
  }
}
