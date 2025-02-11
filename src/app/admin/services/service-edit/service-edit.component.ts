import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model';
import { ServModel } from '../../../layout/serv/model/service.model';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrl: './service-edit.component.scss'
})
export class ServiceEditComponent implements OnInit {
  isLoading = false;
  currentUser!: UserModel;

  id!: number;
  item!: ServModel;

  uploadProgress: number = 0;

  files: File[] = [];
  title: string = '';
  subtitle: string = '';
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
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceService.get(this.id).subscribe((value) => {
      this.item = value; 
    });
  }

  onFileSelected(event: any): void {
    this.files = event.target.files;
  }

  updateItem(item: ServModel) {
    const formData = new FormData();

    formData.append('title', item.title);
    formData.append('subtitle', item.subtitle);
    formData.append('description', item.description); 
    formData.append('signature', "Admin"); // this.currentUser.fullname
   
    for (let i = 0; i < item.files.length; i++) {
      formData.append('files', item.files[i]); 
    }

    this.serviceService.update(item.ID, formData).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('Form submitted successfully', event.body);
          this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
        }

        this.title = '';
        this.subtitle = '';
        this.description = ''; 

        this.isLoading = false;
        this.toastr.success('Modification enregistré!', 'Success!');
        this.router.navigate(['/@admin/services/service-list']);
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
