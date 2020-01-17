import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent, RegistrationComponent, SlidesComponent } from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SlidesComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
  ],
})
export class AccountModule { }
