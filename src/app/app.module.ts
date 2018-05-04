import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';


import { ApplicantService } from './applicant.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    ApplicantDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApplicantService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
