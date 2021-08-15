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
    this.about = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, delectus eaque doloremque cupiditate sequi voluptatem quos praesentium illo provident esse quam a non iure laborum laboriosam. Fugiat magnam nulla incidunt?"
  }

}
