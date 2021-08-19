import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(public data: CoreService) { }
  
  ngOnInit(): void { }

}
