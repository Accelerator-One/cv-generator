import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private openCmp: string = '';
  constructor(private dialog: MatDialog) { }

  openDialog(name: string) {
    this.openCmp = name;
    this.dialog.open(DialogComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}