export interface ButtonAction {
  name: string;
  bootstrapIcon: string;
  classes: string;
  style: string;
  onClick: (index: number) => void;
}
export interface TableRecord {
  values: string[];
  actionButtons: ButtonAction[]
}
export interface TableRecordItem { // TODO: USE DIFFERENT TYPE OF RECORD DATA
  type: string;
  properties: string;
}
export interface PaginationConfig {
  nbOfPages: number;
  onChangePageAction: (pageIndex: number) => void;
}

