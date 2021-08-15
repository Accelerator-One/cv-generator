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
    const docHeight = (window.innerHeight * 28) / 100;
    const fileData = inputRef?.files[0];

    this.imgURL = URL.createObjectURL(fileData);
    profileImg.src = this.imgURL;
    this.imgSelected = true;

    setTimeout(() => {

      let width = profileImg.width;
      let height = profileImg.height;

      if (width >= height) {
        profileImg.style.height = docHeight + 'px';
        profileImg.style.width = 'auto';
        profileImg.style.right = `${Math.abs(docHeight - profileImg.width) / 2}px`;
      }
      else {
        profileImg.style.width = docHeight + 'px';
        profileImg.style.height = 'auto';
        profileImg.style.bottom = `${Math.abs(docHeight - profileImg.height) / 2}px`;
      }

    }, 200);

  }

}
