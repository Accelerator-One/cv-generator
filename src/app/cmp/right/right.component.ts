import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor(public data: CoreService, public dialog: DialogService) { }
  ngOnInit(): void { }

  deleteAchievement(index: number) {
    this.data.achievements = this.data.achievements.filter((val, it) => (index !== it));
    this.data.localStore.next();
  }

  deleteSkill(index: number) {
    this.data.skills = this.data.skills.filter((val, it) => (index !== it));
    this.data.localStore.next();
  }

  deleteCertificate(index: number) {
    this.data.certifications = this.data.certifications.filter((val, it) => (it !== index));
    this.data.localStore.next();
  }
}
