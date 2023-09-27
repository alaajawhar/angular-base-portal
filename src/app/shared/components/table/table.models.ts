export interface ButtonAction {
  name: string;
  bootstrapIcon: string;
  classes: string;
  style: string;
  onClick: (index: number) => void;
}
export interface TableRow {
  values: string[];
  actionButtons: ButtonAction[]
}