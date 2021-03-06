import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HomeComponent } from './home.component'
import { HomeService } from './home.services';

import { SystemModule } from '../../system.module'
import { ThemeModule } from '../../../../@theme/theme.module';
import {CommonModule} from "../../../common/common.module"


const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  children: [],
}
];


@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent

  ],
  entryComponents: [


  ],
  providers: [
    HomeService
  ],
  exports: [

  ],
})
export class HomeModule {
  constructor(
  ) {

  }
}
