import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,

    TruncatePipe,
  ]
})
export class SharedModule { }
 