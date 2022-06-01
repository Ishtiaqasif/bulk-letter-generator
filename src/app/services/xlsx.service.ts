import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class XlsxService {
  data: any[];

  constructor() {
    this.data = [];
  }

  parseFile(file: File): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* create workbook */
        const binaryStr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });

        /* selected the first sheet */
        const wsName: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsName];

        /* save data */
        this.data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
        resolve(this.data);
      };

      reader.readAsBinaryString(file);
    
    });

    return promise;
  }

}
