import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/shared/core.service';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: DialogService, public data: CoreService) {}

  // Skills
  public skills = new FormGroup({
    skill: new FormControl('', [Validators.required])
  });

  addSkill() {
    const value = this.skills.get('skill')?.value;
    this.data.addSkill(value);
  }

  // Achievements
  public achievements = new FormGroup({
    achievement: new FormControl('', [Validators.required])
  });

  addAchievement() {
    const value = this.achievements.get('achievement')?.value;
    this.data.addAchievement(value);
  }

  // Certifications
  public certifications = new FormGroup({
    certificate: new FormControl('', [Validators.required])
  })

  addCertification() {
    const value = this.certifications.get('certificate')?.value;
    this.data.addCertification(value);
  }

  // Experience
  public present: boolean = false;
  public years: Array <Number> = [];
  public months: Array <string> = [
    'January', 'February', 'March', 
    'April', 'May', 'June', 
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  public experience = new FormGroup({
    position: new FormControl('',[Validators.required]),
    company: new FormControl('', [Validators.required]),
    startMonth: new FormControl(null, [Validators.required]),
    endMonth: new FormControl(''),
    startYear: new FormControl(null, [Validators.required]),
    endYear: new FormControl('')
  });

  addExperience() {

    let value = this.experience.value;
    value['startMonth'] = this.months[value['startMonth']]?.slice(0,3);
    value['endMonth'] = this.months[value['endMonth']]?.slice(0,3);
    if(this.present) {
      delete value.endMonth;
      delete value.endYear;
    }

    this.data.addExperience(value);
    
  }

  // Education
  public education = new FormGroup({
    authority: new FormControl('', [Validators.required]),
    score: new FormControl(0, [Validators.required]),
    type: new FormControl('', [Validators.required]),
    total: new FormControl(0)
  });

  addEducation() {
    const value = this.education.value;
    console.log(value);
  }

  onSave(code: string) {

    switch(code) {

      case 'EDU':
        this.addEducation();
        break;

      case 'EXP':
        this.addExperience();
        break;

      case 'CER':
        this.addCertification();
        break;

      case 'SKI':
        this.addSkill();
        break;

      case 'ACH':
        this.addAchievement();
        break;

      default:
        console.error('Incorrect specified option provided');
        break;
      
    }

    this.dialog?.closeDialog();

  }

  ngOnInit() {
    let curr_year = parseInt(Date().split(' ')[3]);
    for (let it = -50; it <= 50; it++)
      this.years.push(it + curr_year);
  }

}
