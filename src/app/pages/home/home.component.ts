import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000, // ⬅️ controls transition speed in ms (e.g. 600ms)
    dots: true,
    nav: false,
    animateOut: 'fadeOut',   // optional
    animateIn: 'fadeOut',     // optional
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };
  
  images = [
    { id: '1', src: 'assets/hero-banner-appliances.png', alt: 'Slide 1' },
    { id: '2', src: 'assets/hero_microwaves.png', alt: 'Slide 2' },
    { id: '3', src: 'assets/hero-banner-appliances.png', alt: 'Slide 3' }
  ];
}
