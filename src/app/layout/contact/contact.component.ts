import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  
  isLoading = false;

  email!: string;
  subject!: string;
  body!: string;

  
constructor(private contactService: ContactService,
  private toastr: ToastrService
) {}

 
 
  sendMail() {
    this.isLoading = true;
    const sendMail = {
      to: this.email,
      subject: this.subject,
      body: this.body,
    };
    this.contactService.sendMail(sendMail).subscribe({
      next: (value) => {
        this.isLoading = false;
        console.log("Mail sent successfull", value);
        this.toastr.success('Votre message a été envoyé avec succès!', 'Succès!');
      },
      error: (error) => {
        this.isLoading = false;
        console.log("error", error);
        this.toastr.error('Une erreur s\'est produite!', 'Error!');
      }
    });
    
  } 

}
