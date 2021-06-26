import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  tacos:string = "assets/img/tacos.jpg";
  nachos:string = "assets/img/nachos.jpg";
  noodles:string = "assets/img/noodles.jpg";
  pizza:string = "assets/img/pizza.jpg";
  burger:string = "assets/img/burger.jpg";
}
