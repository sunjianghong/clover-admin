import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';


import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarNavComponent } from './components/sidebar/nav/nav.component';
import { HeaderModuleComponent } from './components/header/components/module.component';
import { HeaderThemeComponent } from './components/header/components/theme.component';
import { HeaderNotifyComponent } from './components/header/components/notify.component';
import { HeaderIconComponent } from './components/header/components/icon.component';
import { HeaderLangsComponent } from './components/header/components/langs.component';
import { HeaderUserComponent } from './components/header/components/user.component';
import { ProHeaderComponent } from './components/pro-header/pro-header.component';

import { NoticeIconComponent, NoticeListComponent } from './components/notice-icon';



import {
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule,
    // SERVICES
    NzNotificationService,
    NzMessageService
} from 'ng-zorro-antd';

import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';



const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    // NzCalendarModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    // NzCardModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzAvatarModule
];


import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe,TranslatePipe,MomentDatePipe,CNCurrencyPipe,KeysPipe,YNPipe,toUploadFileThumbPipe,toUploadFileSizePipe } from './pipes';
import {
  LayoutComponent
} from './layouts';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule,RouterModule];

const HEADERCOMPONENTS = [
    HeaderModuleComponent,
    HeaderNotifyComponent,
    HeaderIconComponent,
    HeaderThemeComponent,
    HeaderLangsComponent,
    HeaderUserComponent
];

import { ProUserLayoutComponent } from './components/pro/user/user.component';
const PRO = [
    ProUserLayoutComponent
];


const COMPONENTS = [
  ProHeaderComponent,
  LayoutComponent,
  HeaderComponent,
  SidebarComponent,
  SidebarNavComponent,
  ...HEADERCOMPONENTS,
  ...PRO,
  NoticeIconComponent,
  NoticeListComponent
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  TranslatePipe,
  MomentDatePipe,
  CNCurrencyPipe,
  KeysPipe,
  YNPipe,
  toUploadFileThumbPipe,
  toUploadFileSizePipe 
];


@NgModule({
  imports: [...BASE_MODULES, ...ZORROMODULES, NgZorroAntdExtraModule.forRoot(),CountdownModule],
  exports: [...BASE_MODULES,...ZORROMODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [NzNotificationService,NzMessageService],
    };
  }
}
