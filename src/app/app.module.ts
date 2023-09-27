import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {RequirementsComponent} from './modules/requirements/requirements.component';
import {SimpleNotificationsModule} from "angular2-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {BsModalService} from "ngx-bootstrap/modal";
import {ComponentLoaderFactory} from "ngx-bootstrap/component-loader";
import {PositioningService} from "ngx-bootstrap/positioning";
import {FormsModule} from "@angular/forms";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {TableComponent} from './shared/components/table/table.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MultiTabComponent} from './shared/components/multi-tab/multi-tab.component';
import {TabComponent} from './shared/components/multi-tab/tab/tab.component';
import {PagesError404Component} from "./modules/pages-error404/pages-error404.component";
import {TestOneComponent} from './modules/test-one/test-one.component';
import {TestTwoComponent} from './modules/test-two/test-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RequirementsComponent,
    TableComponent,
    MultiTabComponent,
    TabComponent,
    PagesError404Component,
    TestOneComponent,
    TestTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(), CollapseModule,
    FormsModule,
    AngularMultiSelectModule,
    DragDropModule,
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  public static APPLICATION_NAME: string = 'Test Portal';
  public static OWNER_COMPANY: string = 'AJProduction';
  public static OWNER_COMPANY_URL: string = 'www.ajproduction.com';
  public static TAB_BAR_TEXT: string = 'Test-Portal';
}
