import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public data: CoreService) { }
  ngOnInit(): void { }

}
