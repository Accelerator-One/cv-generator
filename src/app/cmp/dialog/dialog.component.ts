import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/shared/core.service';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: DialogService, public data: CoreService) {}

  // Skills
  public skills = new FormGroup({
    skill: new FormControl('', [Validators.required])
  });

  addSkill() {
    const value = this.skills.get('skill')?.value;
    this.data.addSkill(value);
  }

  onSave(code: string) {

    switch(code) {

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
        this.addSkill();
        break;

      case 'ACH':
        console.log('ACH');
        break;

      default:
        console.error('Incorrect specified option provided');
        break;
      
    }

    this.dialog?.closeDialog();

  }

}
