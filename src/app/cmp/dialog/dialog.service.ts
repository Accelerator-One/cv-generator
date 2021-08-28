import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public code: string = '';
  constructor(private dialog: MatDialog) { }

  openDialog(name: string) {
    this.code = name;
    this.dialog.open(DialogComponent, {
      disableClose: true
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}