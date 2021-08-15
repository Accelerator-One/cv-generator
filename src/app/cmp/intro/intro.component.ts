import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public name: String = '';
  public email: String = '';
  public profile: String = '';
  public contact: String = '';

  constructor() { }

  ngOnInit(): void {
    this.name = 'Your Name';
    this.email = 'abcd.wxyz@gmail.com';
    this.profile = 'https://www.linkedin.com/sample-profile';
    this.contact = '+01 0123456789';
  }

}
