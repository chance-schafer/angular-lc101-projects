import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = '../../assets/images/cat1.jpeg';
  image2 = '../../assets/images/dog1.jpeg';
  image3 = '../../assets/images/cat2.jpeg';

  constructor() { }

  ngOnInit() {
  }

}