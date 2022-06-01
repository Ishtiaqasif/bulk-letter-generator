import { Component, OnInit } from '@angular/core';
import { XlsxService } from 'src/app/services/xlsx.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.scss'],
})
export class BeginnerComponent {
  constructor(private xlsxService: XlsxService) {}

  readFile(event: Event): void {
    if (event.target) {
      let input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        let file: File = input.files[0];
        
        this.xlsxService.parseFile(file).then((list: any) => {
          console.log(list);
        });
      }
    }
  }
}
