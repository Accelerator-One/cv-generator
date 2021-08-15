import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public about: string = '';

  constructor() { }

  ngOnInit(): void {
    this.about = "Write about yourself here..."
  }

}
