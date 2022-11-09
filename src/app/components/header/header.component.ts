import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, Inject, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  @Output() navbarExpanded = false;
  @Output() darkMode = false; 
  @Output() lightMode = true; 
  @Output() menuClicked = false;
  number:number = 0;
  
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
  }
  navbarBurgerExpanded() {
    this.navbarExpanded = !this.navbarExpanded 
  }
    
    onLightMode() {
      this.darkMode = true;
      this.lightMode = false;
      console.log('DarkMode is ' + this.darkMode)
      console.log('LightMode is ' + this.lightMode)
    }
    onDarkMode() {
      this.darkMode = false;
      this.lightMode = true;
      console.log('DarkMode is ' + this.darkMode)
      console.log('LightMode is ' + this.lightMode)
    }
    ngDoCheck(): void {
      this.number ++;
      console.log(this.number)
      if(this.darkMode) {
        this.renderer.addClass(this.document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(this.document.body, 'dark-theme');
      }
      
    }
    onClickeMenu() {
      this.navbarExpanded = false;
    }
}
