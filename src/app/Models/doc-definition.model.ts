import {
  Content,
  DynamicBackground,
  DynamicContent,
  Margins,
  Node,
  PageOrientation,
  PageSize,
  PDFVersion,
  Style,
  StyleDictionary,
  TDocumentDefinitions,
  TDocumentInformation,
  Watermark,
} from 'pdfmake/interfaces';

export class DocumentDefinitions implements TDocumentDefinitions {
  constructor(content: string = 'default content') {
    this.content = content;
  }

  content: Content;
  background?: Content | DynamicBackground | undefined;
  compress?: boolean | undefined;
  defaultStyle?: Style | undefined;
  footer?: Content | DynamicContent | undefined;
  header?: Content | DynamicContent | undefined;
  images?: { [key: string]: string } | undefined;
  info?: TDocumentInformation | undefined;
  pageBreakBefore?:
    | ((
        currentNode: Node,
        followingNodesOnPage: Node[],
        nodesOnNextPage: Node[],
        previousNodesOnPage: Node[]
      ) => boolean)
    | undefined;
  pageMargins?: Margins | undefined;
  pageOrientation?: PageOrientation | undefined;
  pageSize?: PageSize | undefined;
  styles?: StyleDictionary | undefined;
  userPassword?: string | undefined;
  ownerPassword?: string | undefined;
  permissions?: PDFKit.DocumentPermissions | undefined;
  version?: PDFVersion | undefined;
  watermark?: string | Watermark | undefined;
}
