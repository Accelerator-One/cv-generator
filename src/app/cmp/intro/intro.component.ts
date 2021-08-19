import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/core.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  
  constructor(public data: CoreService) { }
  ngOnInit(): void { }

}
