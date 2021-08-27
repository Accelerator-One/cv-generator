import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rm-panel',
  templateUrl: './rm-panel.component.html',
  styleUrls: ['./rm-panel.component.scss']
})
export class RmPanelComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  @Input('size') size: string = 'large';
  @Output('close') close = new EventEmitter();
  public hover: boolean = false;

}
