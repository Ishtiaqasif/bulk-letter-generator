import { Content } from 'pdfmake/interfaces';

export class ApplicationTemplateBasic {
  Date: Content | undefined;
  Recipient: Content | undefined;
  Designation: Content | undefined;
  OfficeAddress: Content | undefined;
  Subject: Content | undefined;
  Body: Content | undefined;
  Sender: Content | undefined;
}
