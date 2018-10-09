import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

import { OrderServiceService } from '../../service/order-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public  posts:  Array<any> = [];
    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.',
                post_comments:  '5',
                post_likes: '10'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                post_comments:  '5',
                post_likes: '10'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
                post_comments:  '5',
                post_likes: '10'
            }
        );
        this.posts.push(
            {
                post_title : 'Post One',
                post_datetime : '21/08/18',
                post_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' +
                'Ipsum has been the industrys standard dummy text ever since the 1500s, when an' +
                'unknown printer took a galley of type and scrambled it to make a type specimen book.',
                post_id : '1',
                post_image : 'http://placehold.it/460x250/d2381e/ffffff&text=Image'
            },
            {
                post_title : 'Post One',
                post_datetime : '22/08/18',
                post_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' +
                'Ipsum has been the industrys standard dummy text ever since the 1500s, when an' +
                'unknown printer took a galley of type and scrambled it to make a type specimen book.',
                post_id : '2',
                post_image : 'http://placehold.it/460x250/d2381e/ffffff&text=Image'
            },
            {
                post_title : 'Post One',
                post_datetime : '23/08/18',
                post_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' +
                'Ipsum has been the industrys standard dummy text ever since the 1500s, when an' +
                'unknown printer took a galley of type and scrambled it to make a type specimen book.',
                post_id : '3',
                post_image : 'http://placehold.it/460x250/d2381e/ffffff&text=Image'
            },
            {
                post_title : 'Post One',
                post_datetime : '24/08/18',
                post_desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem' +
                'Ipsum has been the industrys standard dummy text ever since the 1500s, when an' +
                'unknown printer took a galley of type and scrambled it to make a type specimen book.',
                post_id : '4',
                post_image : 'http://placehold.it/460x250/d2381e/ffffff&text=Image'
            }
        );
    }

    ngOnInit() {

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
