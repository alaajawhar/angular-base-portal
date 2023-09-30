import {Component, OnInit} from '@angular/core';
import {ButtonAction, PaginationConfig, TableRecord} from "../../shared/components/table/table.models";
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
