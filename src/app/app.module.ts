import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule, provideToastr } from 'ngx-toastr'; 
import { QuillModule } from 'ngx-quill'; 
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CredentialInterceptor } from './auth/interceptors/credential.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),  
    QuillModule.forRoot() , 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true
    },
    provideClientHydration(),
    provideHttpClient(withFetch()), 
    provideToastr(), // Toastr providers

    provideProtractorTestingSupport(), 
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
