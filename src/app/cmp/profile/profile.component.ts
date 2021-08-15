import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private imgURL = '';

  public imgSelected: Boolean = false;
  public viewMode: Boolean = false;
  public iconName: string = 'account_circle';

  constructor() {
  
  }

  ngOnInit(): void {

  }

  onEnter() {
    if (!this.imgSelected)
      this.iconName = 'edit';
  }

  onLeave() {
    if (!this.imgSelected)
      this.iconName = 'account_circle';
  }

  onClick() {
    const inputRef = document.getElementById('profileInput');
    inputRef?.click();
  }

  setProfile() {

    const inputRef: any = document.getElementById('profileInput');
    const profileImg: any = document.getElementById('profileImg');
    const fileData = inputRef?.files[0];

    this.imgURL = URL.createObjectURL(fileData);
    profileImg.src = this.imgURL;
    this.imgSelected = true;
  }

}
