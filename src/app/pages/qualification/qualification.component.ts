import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  @Output() showEducation = true;
  @Output() showWork = false;
  @Output() showEducationClicked = false;
  @Output() showWorkClicked = false;
  constructor() { }

  ngOnInit(): void {
  }
  onShowEducation() {
    this.showEducation = true;
    this.showWork = false;
    this.showEducationClicked = this.showEducation;
    this.showWorkClicked = !this.showEducationClicked;
  }
  onShowWork() {
    this.showEducation = false;
    this.showWork = true;
    this.showWorkClicked = this.showWork;
    this.showEducationClicked = !this.showWorkClicked;
  }
}
