import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Output() frontendSkillsDisplayed = false;
  @Output() backendSkillsDisplayed = false;
  constructor() { }

  ngOnInit(): void {
  }
  frontendArrow() {
    this.frontendSkillsDisplayed = !this.frontendSkillsDisplayed;
    console.log(this.frontendSkillsDisplayed)
  }
  // frontendArrowOverMouse() {
  //   this.frontendSkillsDisplayed = true;
  // }
  frontendUpArrow() {
    this.frontendSkillsDisplayed = false;
    console.log(this.frontendSkillsDisplayed)
  }
  backendArrow() {
    this.backendSkillsDisplayed = !this.backendSkillsDisplayed;
  }
  // backendArrowOverMouse() {
  //   this.backendSkillsDisplayed = true;
  // }

  backendUpArrow() {
    this.backendSkillsDisplayed = false;
    console.log(this.backendSkillsDisplayed)
  }
}
