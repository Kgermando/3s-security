import { Component } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model'; 
import { AuthService } from '../../../auth/auth.service';
import { PartenaireService } from '../partenaire.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partenaire-add',
  templateUrl: './partenaire-add.component.html',
  styleUrl: './partenaire-add.component.scss'
})
export class PartenaireAddComponent {
  isLoading = false;
  currentUser!: UserModel;

  uploadProgress: number = 0;

  image!: File
  name: string = '';
  link: string = ''; 

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, 4, false] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large'] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      // ['link', 'image', 'video']
    ]
  };
 
  constructor(
    private router: Router, 
    private authService: AuthService,
    private partenaireService: PartenaireService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    // this.authService.user().subscribe({
    //   next: (user) => {
    //     this.currentUser = user;
    //   },
    //   error: (error) => {
    //     this.isLoading = false;
    //     this.router.navigate(['/auth/login']);
    //     console.error(error);
    //   }
    // });
  }

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }


  onSubmit() {
    this.isLoading = true; 

    const formData = new FormData()
    formData.append('name', this.name);
    formData.append('link', this.link); 
    formData.append('signature', "Admin"); // this.currentUser.fullname

    // for (let i = 0; i < this.files.length; i++) { 
    //   formData.append('files', this.files[i], this.files[i].name);
    // }  
    formData.append('image', this.image, this.image.name);
    
    this.partenaireService.create(formData).subscribe({
      next: (event) => {
        
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            console.log('Form submitted successfully', event.body);
            this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
          }

        // this.image = '';
        this.name = '';
        this.link = ''; 

        this.isLoading = false; 
        this.toastr.success('Ajouter avec succès!', 'Success!');
        this.router.navigate(['/@admin/partenaires/partenaire-list']);
      },
      error: (e) => {
        this.isLoading = false;
        console.log("error", e);
      }
    });
    
  }


  onSelectionChanged = (event:any) =>{
    if(event.oldRange == null){
      this.onFocus();
    }
    if(event.range == null){
      this.onBlur();
    }
  }

  onFocus = () =>{
    console.log("On Focus");
  }
  onBlur = () =>{
    console.log("Blurred");
  }
}

