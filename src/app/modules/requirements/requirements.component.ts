import {Component, OnInit} from '@angular/core';
import {ButtonAction, TableRow} from "../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {BsModalService} from "ngx-bootstrap/modal";
import {NotificationUtils} from "../../shared/services/NotificationUtils";

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  title: string = "Requirements"
  desc: string = "Add, edit and delete your requirements"
  columnHeaders: string[] = ['Name', 'Type', 'Date']
  columnData: TableRow[] = [
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

  mainActionButton: ButtonAction[] = [{
    name: 'Add',
    bootstrapIcon: 'bi bi-trash-fill',
    classes: 'btn-primary',
    style: '',
    onClick: () => this.onAddNew()
  }];


  constructor(private router: Router, private notifications: NotificationUtils, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    this.notifications.showSuccessMessage("Deleted", "Requirement 1 has been deleted successfully");
  }

  onAddNew() {
    this.notifications.showSuccessMessage("Created", `New Requirement has been successfully created`);
  }


  private onEdit() {
    this.notifications.showWarningMessage("Created", `New Requirement has been successfully created`);
  }
}
