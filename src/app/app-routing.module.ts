import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequirementsComponent} from "./modules/requirements/requirements.component";
import {PagesError404Component} from "./modules/pages-error404/pages-error404.component";
import {TestOneComponent} from "./modules/test-one/test-one.component";
import {TestTwoComponent} from "./modules/test-two/test-two.component";
import {UsersProfileComponent} from "./modules/users-profile/users-profile.component";
import {PagesRegisterComponent} from "./modules/pages-register/pages-register.component";
import {PagesLoginComponent} from "./modules/pages-login/pages-login.component";

const routes: Routes = [
  {path: '', component: RequirementsComponent},
  {path: 'requirements', component: RequirementsComponent},
  {path: 'profile', component: UsersProfileComponent},
  {path: 'test/1', component: TestOneComponent},
  {path: 'test/2', component: TestTwoComponent},
  {path: 'login', component: PagesLoginComponent},
  {path: 'register', component: PagesRegisterComponent},
  {path: 'error404', component: PagesError404Component, data: {fullScreen: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  static commonExceptions: string[] = [
    '/login',
    '/register',
    '/error404',
  ]

  static appHeaderExceptions: string[] = [
    '/login',
    '/register',
    '/error404',
  ]

  static appSideBarExceptions: string[] = [
    '/login',
    '/register',
    '/error404',
  ]

  static appFooterExceptions: string[] = [
    '/login',
    '/register',
    '/error404',
  ]
}
