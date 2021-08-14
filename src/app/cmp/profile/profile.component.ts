import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public imgSelected: Boolean = false;
  public viewMode: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

}
