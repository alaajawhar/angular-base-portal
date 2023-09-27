import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequirementsComponent} from "./screens/requirements/requirements.component";
import {PagesError404Component} from "./shared/pages-error404/pages-error404.component";
import {TestOneComponent} from "./screens/test-one/test-one.component";
import {TestTwoComponent} from "./screens/test-two/test-two.component";

const routes: Routes = [
  {path: '', component: RequirementsComponent},
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
