import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  currentDate: Date = new Date();
  applicationForm: FormGroup;


  constructor() {
    this.applicationForm = this.instantiateForm();
  }

  instantiateForm(): FormGroup {

    let formControls = {
      date: new FormControl(this.currentDate),
      recipient: new FormControl(''),
      recipientDesignation: new FormControl(''),
      organizationName: new FormControl(''),
      organizationAddress: new FormControl(''),
      applicationSubject: new FormControl(''),
      applicationBody: new FormControl(''),
      sender: new FormControl('')
    }

    return new FormGroup(formControls);
  }
  ngOnInit(): void {
  }

}
