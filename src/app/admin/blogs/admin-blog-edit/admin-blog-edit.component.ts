import { Component, OnInit } from '@angular/core';
import { AdminBlogService } from '../admin-blog.service';
import { UserModel } from '../../../auth/model/user.model'; 
import { ActivatedRoute, Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
import { BlogModel } from '../../../layout/blog/model/blog.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-blog-edit',
  templateUrl: './admin-blog-edit.component.html',
  styleUrl: './admin-blog-edit.component.scss'
})
export class AdminBlogEditComponent implements OnInit {
  isLoading = false;
  currentUser!: UserModel;

  id!: number;
  item!: BlogModel;

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
    private route: ActivatedRoute,
    private router: Router,
    private blogService: AdminBlogService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.blogService.get(this.id).subscribe((value) => {
      this.item = value; 
    });
  }

  onFileSelected(event: any): void {
    this.files = event.target.files;
  }

  updateItem(item: BlogModel) {
    const formData = new FormData();

    formData.append('title', item.title);
    formData.append('resume', item.resume);
    formData.append('content', item.content);
    // formData.append('keyword', item.keyword);
    formData.append('signature', "Admin"); // this.currentUser.fullname

    // Ajouter les fichiers images
    for (let i = 0; i < item.files.length; i++) {
      formData.append('files', item.files[i]); 
    }

    this.blogService.update(item.ID, formData).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('Form submitted successfully', event.body);
          this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
        }

        this.files = [];
        this.title = '';
        this.resume = '';
        this.content = '';
        this.keyword = '';

        this.isLoading = false;
        this.toastr.success('Modification enregistré!', 'Success!');
        this.router.navigate(['/@admin/blogs/blog-list']);
      },
      error: (e) => {
        this.isLoading = false;
        console.log("error", e);
      }
    });
  }


  onSelectionChanged = (event: any) => {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  }

  onFocus = () => {
    console.log("On Focus");
  }
  onBlur = () => {
    console.log("Blurred");
  }
}
