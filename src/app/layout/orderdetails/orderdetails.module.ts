import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

// import { OrderdetailsModule } from './orderdetails-routing.module'; OrderdetailsRoutingModule
import { OrderdetailsRoutingModule } from './orderdetails-routing.module';
import { OrderdetailsComponent } from './orderdetails.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    OrderdetailsRoutingModule
  ],
  declarations: [
    OrderdetailsComponent
  ]
})
export class OrderdetailsModule { }
