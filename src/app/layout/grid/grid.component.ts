import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    constructor() {}
    images = [
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", description: "Image 1" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", description: "Image 2" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8" },
        { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9" }
    ]

    ngOnInit() {}
}
