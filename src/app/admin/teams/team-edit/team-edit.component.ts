import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model';
import { TeamModel } from '../../../layout/team/model/team.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { TeamService } from '../team.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.scss'
})
export class TeamEditComponent implements OnInit {
  isLoading = false;
  currentUser!: UserModel;

  id!: number;
  item!: TeamModel;

  uploadProgress: number = 0;

  image!: File
  fullname: string = '';
  title: string = '';
  collaboration: string = '';
  attitude_positive: string = '';
  customer_service: string = '';
  old_experience: string = '';
  description: string = '';
  email: string = '';
  phone: string = '';
  content: string = '';
  link_facebook: string = '';
  link_x: string = '';
  link_linkedin: string = '';
  link_youtube: string = '';

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
    private authService: AuthService,
    private teamService: TeamService,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.teamService.get(this.id).subscribe((value) => {
        this.item = value; 
      });
    }

    onFileSelected(event: any): void {
      this.image = event.target.files[0];
     }
  
     updateItem(item: TeamModel) {
      const formData = new FormData();
  
      formData.append('fullname', item.fullname);
      formData.append('title', item.title);
      formData.append('collaboration', item.collaboration.toString());
      formData.append('attitude_positive', item.attitude_positive.toString());
      formData.append('customer_service', item.customer_service.toString());
      formData.append('old_experience', item.old_experience.toString());
      formData.append('email', item.email);
      formData.append('phone', item.phone);
      formData.append('content', item.content);
      formData.append('link_facebook', item.link_facebook);
      formData.append('link_x', item.link_x);
      formData.append('link_linkedin', item.link_linkedin);
      formData.append('link_youtube', item.link_youtube);
      formData.append('signature', "Admin"); // this.currentUser.fullname
  
      formData.append('image', item.image);
  
      this.teamService.update(item.ID, formData).subscribe({
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
          this.router.navigate(['/@admin/teams/team-list']);
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
