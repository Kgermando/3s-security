import { Component, OnInit } from '@angular/core';
import { AdminBlogService } from '../admin-blog.service'; 
import { UserModel } from '../../../auth/model/user.model';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-blog-add',
  templateUrl: './admin-blog-add.component.html',
  styleUrl: './admin-blog-add.component.scss'
})
export class AdminBlogAddComponent implements OnInit {
  isLoading = false;
  currentUser!: UserModel;

  uploadProgress: number = 0;

  files: File[] = []; 
  title: string = '';
  resume: string = '';
  content: string = '';
  keyword: string = '';

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
    private blogService: AdminBlogService,
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

  onFileSelected(event: any): void {
   this.files = event.target.files;
  }


  onSubmit() {
    this.isLoading = true; 

    const formData = new FormData()
    formData.append('title', this.title);
    formData.append('resume', this.resume);
    formData.append('content', this.content);
    formData.append('keyword', this.keyword);
    formData.append('signature', "Admin"); // this.currentUser.fullname

    for (let i = 0; i < this.files.length; i++) { 
      formData.append('files', this.files[i], this.files[i].name);
    }
    
    this.blogService.create(formData).subscribe({
      next: (event) => {
        
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            console.log('Form submitted successfully', event.body);
            this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
          }
           
       

        this.files= [];
        this.title = '';
        this.resume = '';
        this.content = '';
        this.keyword = '';
        
        this.isLoading = false; 
        this.toastr.success('Ajouter avec succès!', 'Success!');
        this.router.navigate(['/@admin/blogs/blog-list']);
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
