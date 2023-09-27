import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../app.module";

@Component({
  selector: 'app-pages-error404',
  templateUrl: './pages-error404.component.html',
  styleUrls: ['./pages-error404.component.css']
})
export class PagesError404Component implements OnInit {
  ownerCompany: string = AppModule.OWNER_COMPANY;
  ownerCompanyUrl: string = AppModule.OWNER_COMPANY_URL;

  constructor() { }

  ngOnInit(): void {
  }

}
