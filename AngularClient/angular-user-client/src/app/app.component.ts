import { Component } from '@angular/core';
import { DataService } from "./services/data/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }
}
