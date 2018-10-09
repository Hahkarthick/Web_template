import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserdetailsRoutingModule } from './userdetails-routing.module';
import { UserdetailsComponent } from './userdetails.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    UserdetailsRoutingModule
  ],
  declarations: [
    UserdetailsComponent
  ]
})
export class UserdetailsModule { }
