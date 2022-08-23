import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coding-gif',
  templateUrl: './coding-gif.component.html',
  styleUrls: ['./coding-gif.component.css']
})
export class CodingGifComponent implements OnInit {

  gifURL: string = 'https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif'

  constructor() { }

  ngOnInit() {
  }

}
