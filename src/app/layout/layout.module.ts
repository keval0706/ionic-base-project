import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, InsideLayoutComponent } from '.';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    InsideLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
