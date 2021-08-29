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

  constructor(public dialog: DialogService, public data: CoreService) { }

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
  public expError: string = '';
  public years: Array<Number> = [];
  public months: Array<string> = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  public experience = new FormGroup({
    position: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    startMonth: new FormControl(null, [Validators.required]),
    endMonth: new FormControl(''),
    startYear: new FormControl(null, [Validators.required]),
    endYear: new FormControl('')
  });

  addExperience() {

    let value = this.experience.value;
    value['startMonth'] = this.months[value['startMonth']]?.slice(0, 3);
    value['endMonth'] = this.months[value['endMonth']]?.slice(0, 3);
    if (this.present) {
      delete value.endMonth;
      delete value.endYear;
    }

    this.data.addExperience(value);

  }

  timeValidator() {

    const { 
      startYear, 
      endYear, 
      startMonth, 
      endMonth 
    } = this.experience.value;

    if(this.present)
      return true;

    if(!endMonth && !endYear)
      return this.present;

    if((!endMonth && endYear) || (endMonth && !endYear))
      return false;
    
    if(startYear === endYear && startMonth > endMonth) {
      this.expError = 'Start month cannot be greater than end month';
      return false;
    }
    
    if(startYear > endYear) {
      this.expError = 'Start year cannot be greater than end year';
      return false;
    }
      
    return true;
  }

  // Education
  public ctypes: Array<string> = ['CGPA', 'Percentage'];
  public education = new FormGroup({
    authority: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}((\.[0-9]{1,})||())$')]),
    type: new FormControl('', [Validators.required]),
  });

  addEducation() {
    let value = this.education.value;
    this.data.addEducation(value);
  }

  // Name 
  public name = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  addName() {
    const value = this.name.get('name')?.value;
    this.data.name = value;
  }

  // Email
  public email = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  addEmail() {
    const value = this.email.get('email')?.value;
    this.data.email = value;
  }

  // URL
  public URL = new FormGroup({
    url: new FormControl('', [Validators.required])
  })

  addURL() {
    const value = this.URL.get('url')?.value;
    this.data.url = value;
  }

  // Telephone
  public tel = new FormGroup({
    iso: new FormControl('', [Validators.required, Validators.pattern('^\\+{1}(([0-9]{1,2}-[0-9]{3,4})|([0-9]{1,3}))$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
  });

  addTelephone() {
    const value = this.tel.value;
    this.data.phone = value;
  }

  // About
  public about = new FormGroup({
    about: new FormControl('', [Validators.required, Validators.maxLength(256)])
  });

  addAbout() {
    const value = this.about.get('about')?.value;
    this.data.about = value;
  }

  onSave(code: string) {

    switch (code) {

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

      case 'NAME':
        this.addName();
        break;

      case 'EMAIL':
        this.addEmail();
        break;

      case 'PHONE':
        this.addTelephone();
        break;

      case 'URL':
        this.addURL();
        break;

      case 'ABOUT':
        this.addAbout();
        break;

      default:
        console.error('Incorrect specified option provided');
        break;

    }

    this.data.localStore.next();
    this.dialog?.closeDialog();

  }

  ngOnInit() {
    let curr_year = parseInt(Date().split(' ')[3]);
    for (let it = -50; it <= 50; it++)
      this.years.push(it + curr_year);
  }

}
