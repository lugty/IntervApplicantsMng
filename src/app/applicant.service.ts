import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

import { Applicant } from './applicant';
import { APPLICANTS } from './mock-applicants';

@Injectable()
export class ApplicantService {

  constructor(private messageService: MessageService) { }

  getApplicants(): Observable<Applicant[]> {
    this.messageService.addMessage('ApplicantService: fetched applicants');
    return of(APPLICANTS);
  }

}
