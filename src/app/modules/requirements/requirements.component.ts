import {Component, OnInit} from '@angular/core';
import {
  ButtonAction,
  PaginationConfig,
  TableFilter,
  TableFilterEnum,
  TableRecord
} from "../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {BsModalService} from "ngx-bootstrap/modal";
import {NotificationUtils} from "../../shared/services/NotificationUtils";
import {SweetAlertUtils} from "../../shared/utils/SweetAlertUtils";


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  title: string = "Requirements"
  description: string = "Add, edit and delete your requirements"

  inputText: string = ''
  inputNumeric: number = undefined!;
  date: Date = new Date();
  time: Date = new Date();
  color: string = '';
  selectOptions: string = '';
  multiSelectOptions: string[] = [];
  tableFilters: TableFilter = {
    filters: [
      {
        title: 'Input Text',
        filerType: TableFilterEnum.INPUT_TEXT,
        in: undefined,
        out: this.inputText
      },
      {
        title: 'Input Numeric',
        filerType: TableFilterEnum.INPUT_NUMERIC,
        in: undefined,
        out: this.inputNumeric,
      },
      {
        title: 'Date',
        filerType: TableFilterEnum.DATE_PICKER,
        in: undefined,
        out: this.date,
      },
      {
        title: 'Time',
        filerType: TableFilterEnum.TIME_PICKER,
        in: undefined,
        out: this.time,
      },
      {
        title: 'Select Options',
        filerType: TableFilterEnum.SELECT_OPTION,
        in: ['option1', 'option2'],
        out: this.selectOptions,
      },
      {
        title: 'Multi-Select Options',
        filerType: TableFilterEnum.MULTI_SELECT_OPTION,
        in: ['option1', 'option2'],
        out: this.multiSelectOptions,
      }, {
        title: 'Color',
        filerType: TableFilterEnum.COLOR_PICKER,
        in: '#000000',
        out: this.color,
      },
    ],
    onFilterClick: () => this.onFilter()
  }

  columnHeaders: string[] = ['Name', 'Type', 'Date']

  columnData: TableRecord[] = [
    {
      values: ['Requirement 1', 'Feature', '2016-05-26'],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.onEdit()
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
      }]
    }]

  mainActionButton: ButtonAction[] = [
    {
      name: 'Add',
      bootstrapIcon: 'bi bi-trash-fill',
      classes: 'btn-primary',
      style: '',
      onClick: () => this.onAddNew()
    }
  ];
  paginationConfig: PaginationConfig = {
    nbOfPages: 5,
    onChangePageAction: (pageIndex: number) => this.onPageChange(pageIndex)
  }


  constructor(private router: Router, private notifications: NotificationUtils, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onFilter() {
    console.log("Filter Button has been clicked!")
  }

  onDelete(index: number) {
    SweetAlertUtils.confirmDelete(
      'Are you sure?',
      `You won't be able to revert this!`,
      () => this.notifications.showSuccessMessage("Deleted", "Requirement 1 has been deleted successfully")
    );
  }

  onAddNew() {
    this.notifications.showSuccessMessage("Created", `New Requirement has been successfully created`);
  }

  private onEdit() {
    this.notifications.showWarningMessage("Performance Issue", `New Requirement may cause performance issues`);
  }

  onPageChange(pageNumber: number) {
    console.log(pageNumber);
  }
}
