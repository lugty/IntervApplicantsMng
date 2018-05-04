import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant';

import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  applicants: Applicant[];
  selectedApplicant: Applicant;

  constructor(private applicantService: ApplicantService) {}

  getApplicants(): void {
    this.applicantService.getApplicants()
      .subscribe(applicants => this.applicants = applicants);
  }

  onSelect( applicant: Applicant ): void {
    this.selectedApplicant = applicant;
  }

  ngOnInit() {
    this.getApplicants();
  }

}
