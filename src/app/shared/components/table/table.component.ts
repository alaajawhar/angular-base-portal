import {Component, Input, OnInit} from '@angular/core';
import {ButtonAction, TableRow} from "./table.models";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tableHeaders: string[] = [];
  @Input() tableRecords: TableRow[] = [];
  @Input() mainActionButtons: ButtonAction[] = [];


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

}
