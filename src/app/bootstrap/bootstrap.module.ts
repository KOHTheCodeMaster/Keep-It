import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';

// import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    // BrowserModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class BootstrapModule {
}
