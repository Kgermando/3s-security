import { Component } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model'; 
import { AuthService } from '../../../auth/auth.service';
import { SliderService } from '../slider.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-add',
  templateUrl: './slider-add.component.html',
  styleUrl: './slider-add.component.scss'
})
export class SliderAddComponent {
  isLoading = false;
  currentUser!: UserModel;

  uploadProgress: number = 0;

  image!: File
  title: string = '';
  description: string = ''; 

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
    private sliderService: SliderService,
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
    formData.append('title', this.title);
    formData.append('description', this.description); 
    formData.append('signature', "Admin"); // this.currentUser.fullname

    // for (let i = 0; i < this.files.length; i++) { 
    //   formData.append('files', this.files[i], this.files[i].name);
    // }  
    formData.append('image', this.image, this.image.name);
    
    this.sliderService.create(formData).subscribe({
      next: (event) => {
        
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            console.log('Form submitted successfully', event.body);
            this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
          }

        // this.image = '';
        this.title = '';
        this.description = ''; 
        this.isLoading = false; 
        
        this.toastr.success('Ajouter avec succès!', 'Success!');
        this.router.navigate(['/@admin/home/slider-list']);
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
