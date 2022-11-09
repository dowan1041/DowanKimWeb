import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Output() modalShow = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCloseModal() {
    this.modalShow = false;
    console.log(this.modalShow);
  }
  onShowModal() {
    this.modalShow =true;
    console.log(this.modalShow)
  }
}
