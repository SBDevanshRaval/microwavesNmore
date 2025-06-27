import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeekBundleComponent } from './shared/week-bundle/week-bundle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microwavesNmore';
  public showPopUp: boolean = true;
 
  @ViewChild('mainContainer') mainContainer!: ElementRef;
 
 constructor(
  private dialog: MatDialog
 ){}
  ngOnInit() {
    if(this.showPopUp){
      this.initializeWeekBundle()
    }

  }

  async initializeWeekBundle(){
    setTimeout(() => {
      this.dialog.open(WeekBundleComponent, {
      width: '500px',
      autoFocus: false,
      panelClass: 'custom-dialog-container',
      maxHeight: '90dvh', // Prevents full-page scroll
      data: { someData: 'example' },
    });
    }, 1000);
  }
 

   
  public forceScrollToTop() {
    // Smooth scroll window
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // Smooth scroll html and body for some browsers (optional fallback)
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  
    // Smooth scroll container if it exists
    const container = document.querySelector('#mainContainer');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
}
