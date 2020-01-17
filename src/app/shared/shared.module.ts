import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IsDecimalDirective, IsNumberDirective, EmailValidator, PhoneValidator, PasswordValidator,
  EqualValidator,
} from '.';
import { ErrorMsgComponent } from './components/error-messages/error-msg.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    // directives
    IsDecimalDirective,
    IsNumberDirective,
    EmailValidator,
    PhoneValidator,
    PasswordValidator,
    EqualValidator,

    // components
    ErrorMsgComponent,
  ],
  imports: [
    // module
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // module
    IonicModule,
    FormsModule,
    ReactiveFormsModule,

    // directives
    IsDecimalDirective,
    IsNumberDirective,
    EmailValidator,
    PhoneValidator,
    PasswordValidator,
    EqualValidator,

    // components
    ErrorMsgComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
