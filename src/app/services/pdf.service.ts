import { Injectable } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { DocumentDefinitions } from '../Models/doc-definition.model';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  
  generatePDF(text: string = 'Content starts from here') {  
    let docDefinition: DocumentDefinitions = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [ 40, 60, 40, 60 ],
      header:'Header',
      content: text}
    
      pdfMake.createPdf(docDefinition).open();  
  }  
}
