import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-starter-angular';
  counter = 0;

  increase(value: number) {
    this.counter += value;
  }

  reset(){
    this.counter = 0;
  }


}
