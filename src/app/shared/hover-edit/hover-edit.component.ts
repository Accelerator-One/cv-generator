import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hover-edit',
  templateUrl: './hover-edit.component.html',
  styleUrls: ['./hover-edit.component.scss']
})
export class HoverEditComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  public hover: boolean = false;
  @Output ('dialog') dialog = new EventEmitter();

}