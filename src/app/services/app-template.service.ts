import { Injectable } from '@angular/core';
import { Content } from 'pdfmake/interfaces';
import { ApplicationTemplateBasic } from '../Models/application-template';
import { ApplicationSectionPositionEnum as AppSecPosition } from '../Models/enum/application-section-position.enum';

@Injectable({
  providedIn: 'root'
})
export class AppTemplateService {

  constructor() { }

  getDemoApplicationTemplate(): Content {
    let demoTemplate: Content[] = [];


    demoTemplate[AppSecPosition.Date] = {text: new Date().toLocaleDateString("en-IN", {year: 'numeric', month: 'long', day: 'numeric' }), margin: [0, 20]};
    demoTemplate[AppSecPosition.Recipient] = "Asif Ishtiaq";
    demoTemplate[AppSecPosition.RecipientDesignation] = "System Developer";
    demoTemplate[AppSecPosition.OrganizationNameAndAddress] = "Majestic Company, 123 Midway Drive, Mega City, NY 42311".replace(',', '\n');
    demoTemplate[AppSecPosition.ApplicationSubject] = {text: "Subject: Promotion letter", margin: [0, 20]};
    demoTemplate[AppSecPosition.ApplicationBody] = [
      {text:"Dear Concern,"},
      {text: ".     " + "We are pleased to inform you that you have been promoted to We are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted to"},
      {text: ".     " + "We are pleased to inform you that you have been promoted to We are pleased to inform you that you have been promoted to"},
    ]
    demoTemplate[AppSecPosition.Sender] = [
      {text: "Regards,", margin: [0, 20]},
      {text: "Json Patel"}
    ];
    return demoTemplate;
  }

}
