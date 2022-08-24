import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [ 'Call mom', 'Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen', 'Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen'];

   targetImage = 'https://assets.webiconspng.com/uploads/2017/09/Target-PNG-Image-85177.png';

   constructor() { }

   ngOnInit() {
   }

}
