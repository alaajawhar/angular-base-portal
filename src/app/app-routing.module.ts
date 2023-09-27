import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequirementsComponent} from "./modules/requirements/requirements.component";
import {PagesError404Component} from "./modules/pages-error404/pages-error404.component";
import {TestOneComponent} from "./modules/test-one/test-one.component";
import {TestTwoComponent} from "./modules/test-two/test-two.component";

const routes: Routes = [
  {path: '', component: RequirementsComponent},
  {path: 'requirements', component: RequirementsComponent},
  {path: 'test/1', component: TestOneComponent},
  {path: 'test/2', component: TestTwoComponent},
  {path: 'error404', component: PagesError404Component, data: {fullScreen: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
