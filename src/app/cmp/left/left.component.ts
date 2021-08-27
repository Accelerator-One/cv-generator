import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(public data: CoreService, public dialog: DialogService) { }
  ngOnInit(): void { }

  deleteEducation(index: number) {
    this.data.education = this.data.education.filter((val, it) => (it !== index));
  }

}
