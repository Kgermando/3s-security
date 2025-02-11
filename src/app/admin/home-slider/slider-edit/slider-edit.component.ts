import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model';
import { HomeSliderModel } from '../../../layout/home/model/homeSlider.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderService } from '../slider.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-slider-edit',
  templateUrl: './slider-edit.component.html',
  styleUrl: './slider-edit.component.scss'
})
export class SliderEditComponent implements OnInit {
  isLoading = false;
  currentUser!: UserModel;

  id!: number;
  item!: HomeSliderModel;

  uploadProgress: number = 0;

  file!: File; 
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
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: SliderService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sliderService.get(this.id).subscribe((value) => {
      this.item = value; 
    });
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
   }

  updateItem(item: HomeSliderModel) {
    const formData = new FormData();

    formData.append('title', item.title);
    formData.append('description', item.description); 
    formData.append('signature', "Admin"); // this.currentUser.fullname

    formData.append('image', item.image);

    this.sliderService.update(item.ID, formData).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('Form submitted successfully', event.body);
          this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
        }

        this.title = '';
        this.description = ''; 

        this.isLoading = false;
        this.toastr.success('Modification enregistré!', 'Success!');
        this.router.navigate(['/@admin/home/slider-list']);
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
