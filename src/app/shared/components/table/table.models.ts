export interface ButtonAction {
  name: string;
  bootstrapIcon: string;
  classes: string;
  style: string;
  onClick: (index: number) => void;
}

export interface TableFilter {
  filters: FilterItem[],
  onFilterClick: () => void;
}

export interface FilterItem {
  title: string;
  filerType: TableFilterEnum;
  in: any;
  out: any;
}

export enum TableFilterEnum {
  INPUT_TEXT = 'INPUT_TEXT',
  INPUT_NUMERIC = 'INPUT_NUMERIC',
  SELECT_OPTION = 'SELECT_OPTION',
  MULTI_SELECT_OPTION = 'MULTI_SELECT_OPTION',
  DATE_PICKER = 'DATE_PICKER',
  TIME_PICKER = 'TIME_PICKER',
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
