import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SideBarItem} from "./sidebar.component.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideBarList: SideBarItem[] = [
    {
      bootstrapIcon: 'bi bi-list-check',
      routing: '/requirements',
      title: 'Group1',
      child: [
        {
          routing: '/requirements',
          title: 'requirement1',
        },
        {
          routing: '/test/2',
          title: 'requirement1',
        },
      ],
    },
    {
      bootstrapIcon: 'bi bi-grid',
      routing: '/user-stories',
      title: 'Group2',
      child: [
        {
          routing: '/test/1',
          title: 'story1',
        },
      ],
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  selectedChild: string = ""

  activeClass(routingTab: string) {
    return this.router.url.indexOf(routingTab) >= 0 ? '' : 'collapsed';
  }

  hasChild(index: number) {
    return this.sideBarList[index].child != undefined && this.sideBarList[index].child.length != 0;
  }

  isChildSelected(tabIndex: number, childIndex: number) {
    return this.router.url.indexOf(this.sideBarList[tabIndex].child[childIndex].routing) >= 0;
  }

  onChildClick(tabIndex: number, childIndex: number) {
    this.selectedChild = this.sideBarList[tabIndex].child[childIndex].routing;

    this.router.navigate([this.selectedChild]);
  }

}
