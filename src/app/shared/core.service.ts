import { Injectable } from '@angular/core';
import { Education, Experience } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  // Data members
  public url: String;
  public name: String;
  public email: String;
  public code: String;
  public phone: Number;

  public about: String;
  public education: Array<Education>;
  public experience: Array<Experience>;

  public editMode: Boolean;
  public skills: Array<String>;
  public achievements: Array<String>;
  public certifications: Array<String>;

  // Initialization
  constructor() {

    this.url = 'https://www.linkedin.com/sample-profile';
    this.name = 'Your Name Here';
    this.email = 'abcd.wxyz@gmail.com';
    this.code = '+01';
    this.phone = 1234567890;

    this.about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati exercitationem veniam mollitia quasi, distinctio repellat unde amet aut, iure, maxime minima assumenda placeat laudantium harum sapiente voluptatum rerum necessitatibus.';
    this.education = [];
    this.experience = [];

    this.skills = [];
    this.editMode = true;
    this.achievements = [];
    this.certifications = [];

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

}
