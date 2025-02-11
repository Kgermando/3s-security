import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  dateY = '';
  isLoading = false;
 

  fullname:string = '';
  email: string = '';
  phone: string = '';
  title: string = '';
  password: string = '';
  password_confirm: string = '';
  role: string = 'Accredition';
  permission: string = 'Permission';
  status: string = '';


  constructor(
    private router: Router, 
    private authService: AuthService, 
    private toastr: ToastrService
  ) {
    this.dateY = formatDate(new Date(), 'yyyy', 'en');
  }

 

  onSubmit() {
    this.isLoading = true;
    var body = {
      fullname: this.fullname,
      email: this.email,
      title: this.title,
      phone: this.phone,
      password: this.password,
      password_confirm: this.password_confirm, 
      role: this.role,
      permission: this.permission,
      status: this.status,
      signature: '',
      entreprise: 'SMACO'
    };
    this.authService.register(body).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toastr.success('Compte créer avec succès!', 'Success!');
        this.navigate();
      },
      error: (err) => {
        this.isLoading = false;
        this.toastr.error('Une erreur s\'est produite!', 'Oupss!');
        console.log(err);
      }
    });
  }

  private navigate() {
    this.router.navigate(['/auth/login']);
  }
}
