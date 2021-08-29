import { Component } from '@angular/core';
import { CoreService } from './shared/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public profileHover: boolean = false;
  constructor(public data: CoreService) { }
}