import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  title: string = 'Favorite Links'
  favLinks: string[] = ['https://pokemon-stat-finder.netlify.app/', 'https://findtheinvisiblecow.com/']

  constructor() { }

  ngOnInit() {
  }

}
