import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;

  widthCheck(width, height) {
    if (width > 240000 || width < 0 || height < 1001 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.'
      let movement = parseInt(rocketImage.style.bottom) + 100 + 'px';
      rocketImage.style.bottom = movement
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.message = 'The shuttle has landed.'
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Do you really want to abort the mission?')
    if(result) {
      this.message = 'Mission aborted';
      this.color = 'red';
      this.height = 0;
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  }

  moveRocket(rocketImage, direction) {
    if(direction === 'right') {
      if(this.width < 260000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000
      }
    } else if(direction === 'left') {
      if(this.width > -20000) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000
      console.log(this.width)
      }
    } else if (direction === 'up') {
      if(this.height < 33000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 1000
      }
    } else if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 1000
      if(this.height === 0) {
        window.alert('Shuttle has crashed!')
        this.message = 'Shuttle has crashed!'
        rocketImage.style.transform = 'rotate(180deg)';
        rocketImage.style.backgroundColor = 'red'
      }
    }
    this.widthCheck(this.width, this.height);
  }
}
