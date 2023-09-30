import {Component, Input, OnInit} from '@angular/core';
import {ButtonAction, PaginationConfig, TableFilter, TableFilterEnum, TableRecord} from "./table.models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  /* EXPOSED */
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tableFilters: TableFilter = undefined!;
  @Input() tableHeaders: string[] = [];
  @Input() tableRecords: TableRecord[] = [];
  @Input() showPagination: boolean = true;
  @Input() mainActionButtons: ButtonAction[] = [];
  @Input() paginationConfig: PaginationConfig = undefined!;

  /* INTERNAL */
  selectedPageNumber: number = 0;
  tableFilterEnum: typeof TableFilterEnum = TableFilterEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  actionButtonClasses(index: number) {
    let buttonStyles: string = this.mainActionButtons[index].style;

    if (index != this.mainActionButtons.length - 1) {
      buttonStyles = buttonStyles + ' me-3 '
    }

    return buttonStyles
  }

  async onPrevious() {
    await this.onPageChange(this.selectedPageNumber - 1)
  }

  async onNext() {
    await this.onPageChange(this.selectedPageNumber + 1)
  }

  async onPageChange(pageNumber: number) {
    this.selectedPageNumber = pageNumber;
    this.paginationConfig.onChangePageAction(pageNumber);
  }

}
