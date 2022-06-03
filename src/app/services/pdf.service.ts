import { Injectable } from '@angular/core';
import { padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Content } from 'pdfmake/interfaces';
import { DateFormat } from '../Models/date-format.model';
import { DocumentDefinitions } from '../Models/doc-definition.model';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  
  generatePDF(text: string) {  

    let date: Content = {text: new Date().toLocaleDateString("en-IN", {year: 'numeric', month: 'long', day: 'numeric' }), margin: [0, 20]};
    let fullName = "Asif Ishtiaq";
    let designation = "System Developer";
    let officeAddress = "Majestic Company, 123 Midway Drive, Mega City, NY 42311".replace(',', '\n');
    let subject: Content = {text: "Subject: Promotion letter", margin: [0, 20]};

    let body: Content = [
      {text:"Dear Concern,"},
      {text: ".     " + "We are pleased to inform you that you have been promoted to We are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted toWe are pleased to inform you that you have been promoted to"},
      {text: ".     " + "We are pleased to inform you that you have been promoted to We are pleased to inform you that you have been promoted to"},
      {text: "Regards,", margin: [0, 20]},
      {text: "Json Patel"},
    ]

    let docDefinition: DocumentDefinitions = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [
        date,
        fullName,
        designation,
        officeAddress,
        subject,
        body
      ]
    }
    
      pdfMake.createPdf(docDefinition).open();  
  }  
}
