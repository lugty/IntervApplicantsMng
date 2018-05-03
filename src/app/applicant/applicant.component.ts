import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';
import { APPLICANTS } from '../mock-applicants';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  applicants = APPLICANTS;
  selectedApplicant: Applicant;

  onSelect( applicant: Applicant ): void {
    this.selectedApplicant = applicant;
  }

  constructor() { }

  ngOnInit() {
  }

}
