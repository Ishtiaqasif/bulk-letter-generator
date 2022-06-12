import { Injectable } from '@angular/core';
import { padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Content } from 'pdfmake/interfaces';
import { ApplicationTemplateBasic } from '../Models/application-template';
import { DateFormat } from '../Models/date-format.model';
import { DocumentDefinitions } from '../Models/doc-definition.model';
import { AppTemplateService } from './app-template.service';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private appTemplateService: AppTemplateService) { }
  
  generatePDF(text: string) {  
    let applicationTemplate: Content = this.appTemplateService.getDemoApplicationTemplate();
    

    let docDefinition: DocumentDefinitions = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      content: [applicationTemplate]
    }
    
      pdfMake.createPdf(docDefinition).open();  
  }  
}
