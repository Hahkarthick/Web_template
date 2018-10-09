import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderServiceService } from '../../service/order-service.service';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  id: string;
  orderDetail: any[];

  constructor(
    public OrderService: OrderServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    // console.log(DashboardComponent.orderDetails);

   }

  ngOnInit() {
    // Get Id
    this.id = this.route.snapshot.params['id'];

    // Get Order Details
    this.OrderService.getOrder(this.id).subscribe(order => {
      this.orderDetail = order;
      console.log(order);

    });

  }

}
