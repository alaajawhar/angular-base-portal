import {AfterContentInit, Component, ContentChildren, QueryList, TemplateRef} from '@angular/core';
import {TabComponent} from "./tab/tab.component";

@Component({
  selector: 'app-multi-tab',
  templateUrl: './multi-tab.component.html',
  styleUrls: ['./multi-tab.component.css']
})
export class MultiTabComponent  implements AfterContentInit {
  @ContentChildren(TabComponent) tabComponents!: QueryList<TabComponent>;

  tabs: { title: string }[] = [];
  tabContents: TemplateRef<any>[] = [];

  ngAfterContentInit() {
    this.tabs = this.tabComponents.map((tabComponent: TabComponent) => {
      return { title: tabComponent.title };
    });

    this.tabContents = this.tabComponents.map((tabComponent: TabComponent) => tabComponent.templateRef);
  }
}
