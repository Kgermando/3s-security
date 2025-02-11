import { Component } from '@angular/core';
import { UserModel } from '../../../auth/model/user.model';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from '../team.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrl: './team-add.component.scss'
})
export class TeamAddComponent {
  isLoading = false;
  currentUser!: UserModel;

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
    private router: Router,
    private authService: AuthService,
    private teamService: TeamService,
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
    formData.append('fullname', this.fullname);
    formData.append('title', this.title);
    formData.append('collaboration', this.collaboration);
    formData.append('attitude_positive', this.attitude_positive);
    formData.append('customer_service', this.customer_service);
    formData.append('old_experience', this.old_experience);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('content', this.content);
    formData.append('link_facebook', this.link_facebook);
    formData.append('link_x', this.link_x);
    formData.append('link_linkedin', this.link_linkedin);
    formData.append('link_youtube', this.link_youtube);
    formData.append('signature', "Admin"); // this.currentUser.fullname


    formData.append('image', this.image, this.image.name);

    this.teamService.create(formData).subscribe({
      next: (event) => {

        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('Form submitted successfully', event.body);
          this.uploadProgress = 0; // Réinitialiser la barre de progression après téléchargement
        }

        // this.image = '';
        this.fullname = '';
        this.title = '';
        this.collaboration = '';
        this.attitude_positive = '';
        this.customer_service = '';
        this.old_experience = '';
        this.description = '';
        this.email = '';
        this.phone = '';
        this.content = '';
        this.link_facebook = '';
        this.link_x = '';
        this.link_linkedin = '';
        this.link_youtube = '';

        this.isLoading = false;
        this.toastr.success('Ajouter avec succès!', 'Success!');
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
