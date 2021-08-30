import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hover-edit',
  templateUrl: './hover-edit.component.html',
  styleUrls: ['./hover-edit.component.scss']
})
export class HoverEditComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  public hover: boolean = false;
  @Input ('spaced') spaced: boolean = true;
  @Output ('dialog') dialog = new EventEmitter();

}
