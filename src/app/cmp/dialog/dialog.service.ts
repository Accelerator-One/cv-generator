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
    this.dialog.open(DialogComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  onSave() {

    switch(this.code) {

      case 'EDU':
        console.log('EDU');
        break;

      case 'EXP':
        console.log('EXP');
        break;

      case 'CER':
        console.log('CER');
        break;

      case 'SKI':
        console.log('SKI');
        break;

      case 'ACH':
        console.log('ACH');
        break;

      default:
        console.error('Incorrect specified option provided');
        break;
      
    }

    this.closeDialog();

  }
}