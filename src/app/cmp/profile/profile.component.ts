import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  private imgURL = '';
  public imgSelected: Boolean = false;
  public viewMode: Boolean = false;
  public iconName: string = 'account_circle';

  constructor() { }

  ngAfterViewInit() {

    const avatarLocal = window.localStorage.getItem('avatar');
    const profileImg: any = document.getElementById('profileImg');

    if (!!avatarLocal) {
      profileImg.src = avatarLocal;
      this.arrangeImage(false);
      this.imgSelected = true;
    }

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
    this.arrangeImage(true);
    this.imgSelected = true;

  }

  async saveLocally(width: number, height: number) {

    let canvas = document.createElement('canvas');
    const imgRef: any = document.getElementById('profileImg');

    const canvasRef: any = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    canvasRef?.drawImage(imgRef, 0, 0);
    await canvas.toBlob(async (res: any) => {

      let reader = new FileReader();
      await reader.readAsDataURL(res);
      reader.onload = (res: any) => {
        window.localStorage.setItem('avatar', res.target.result);
      }

    }, 'image/png', 0.8);

  }

  arrangeImage(flag: boolean) {

    const profileImg: any = document.getElementById('profileImg');
    const docHeight = (window.innerHeight * 28) / 100;

    setTimeout(async () => {

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

      if (flag === true)
        await this.saveLocally(width, height);

    }, 200);

  }

}