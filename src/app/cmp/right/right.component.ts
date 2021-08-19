import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor(public data: CoreService) { }

  ngOnInit(): void { }

}
