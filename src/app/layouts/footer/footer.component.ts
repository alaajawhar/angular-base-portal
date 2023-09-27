import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../app.module";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  productOwner: string = AppModule.OWNER_COMPANY;
  constructor() { }

  ngOnInit(): void {
  }
  scrollTop()
  {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});

  }
}
