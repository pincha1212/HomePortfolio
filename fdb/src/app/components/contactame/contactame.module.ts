import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactameRoutingModule } from './contactame-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactameRoutingModule
  ],
  exports: [
    FormComponent
  ]
})
export class ContactameModule { }
