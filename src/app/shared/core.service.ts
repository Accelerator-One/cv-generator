import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, throttleTime } from 'rxjs/operators';
import { Education, Experience, Contact } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoreService implements OnDestroy {

  // Data members
  public url: String = '';
  public name: String = '';
  public email: String = '';
  public phone: Contact = {
    iso: '',
    phone: Number.NaN
  };

  public about: String = '';
  public education: Array<Education> = [];
  public experience: Array<Experience> = [];

  public editMode: Boolean;
  public skills: Array<String> = [];
  public achievements: Array<String> = [];
  public certifications: Array<String> = [];

  // Stream control
  public localStore: Subject <void> = new Subject <void> ();
  public $destroy: Subject <void> = new Subject <void> ();

  // Initialization
  constructor() {

    this.editMode = true;
    let result = this.localStoreDataPresent();

    if(!result)
      this.initializeState();
    else
      this.setInitialState(result);

    this.localStore.pipe(
      takeUntil(this.$destroy),
      throttleTime(8000),
      tap(res => console.log('Saving details...'))
    )
    .subscribe(()=> {
      this.setLocalStorage();
    });
  }


  initializeState() {

    this.url = 'https://www.linkedin.com/sample-profile';
    this.name = 'Your Name Here';
    this.email = 'abcd.wxyz@gmail.com';
    this.phone = {
      'iso': '+10',
      'phone': 1234567890
    };

    this.about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati exercitationem veniam mollitia quasi, distinctio repellat unde amet aut, iure, maxime minima assumenda placeat laudantium harum sapiente voluptatum rerum necessitatibus.';

  }

  setInitialState(result: any) {

    const { 
      url, 
      name, 
      email, 
      phone, 
      about, 
      education, 
      experience,
      skills,
      achievements,
      certifications
    }
      = JSON.parse(result);

    this.url = url;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.about = about;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
    this.achievements = achievements;
    this.certifications = certifications;

  }


  localStoreDataPresent() {
    const store = window.localStorage.getItem('cv');
    return store?store:false;
  }

  setLocalStorage() {

    const value = {
      url: this.url,
      name: this.name,
      email: this.email,
      phone: this.phone,
      about: this.about,
      education: this.education,
      experience: this.experience,
      skills: this.skills,
      achievements: this.achievements,
      certifications :this.certifications
    };

    window.localStorage.setItem('cv', JSON.stringify(value));

  }

  // Setter methods
  addEducation(obj: Education) {
    this.education.push(obj);
  }

  addExperience(obj: Experience) {
    this.experience.push(obj);
  }

  addSkill(data: String) {
    this.skills.push(data);
  }

  addAchievement(data: String) {
    this.achievements.push(data);
  }

  addCertification(data: String) {
    this.certifications.push(data);
  }

  toggleEditMode() {

    this.editMode = false;
    setTimeout(() => {
      window.print();
    }, 800);
    
    setTimeout(() => {
      this.editMode = true;
    }, 1600);

  }

  ngOnDestroy() {
    this.$destroy.next();
  }

}
