import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { XlsxService } from 'src/app/services/xlsx.service';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.scss'],
})
export class BeginnerComponent {
  data: any[];
  text: string;
  constructor(
    private xlsxService: XlsxService,
    private pdfService: PdfService
  ) {
    this.data = [];
    this.text = '';
  }

  readFile(event: Event): void {
    if (event.target) {
      let input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        let file: File = input.files[0];

        this.xlsxService.parseFile(file).then((list: any) => {
          this.data = list;
        });
      }
    }
  }

  generateLatter(): void {
    console.log(this.data);

    this.data.length = 3;

    this.data.forEach((item: any) => {
      let text = this.text;
      Object.keys(item).forEach((key: string) => {
        text = text.replace(`[${key}]`, item[key]);
      });

      this.pdfService.generatePDF(text);
    });
  }

  
}
