import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeOut',
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };
  
  images = [
    { id: '1', src: 'assets/hero-banner-appliances.png', alt: 'Slide 1' },
    { id: '2', src: 'assets/herob1.jpg', alt: 'Slide 2' },
    { id: '3', src: 'assets/herob2.jpg', alt: 'Slide 3' },
    { id: '4', src: 'assets/herob3.jpg', alt: 'Slide 4' },
    { id: '5', src: 'assets/herob4.png', alt: 'Slide 5' },
  ];

  navigateToCategory(category: string) {
    // Convert category names to match catalog component's format
    const categoryMap: { [key: string]: string } = {
      'Fridge': 'fridge',
      'Air Fryers': 'air fryer',
      'Cookers': 'cooker'
    };

    this.router.navigate(['/catalog'], {
      queryParams: { category: categoryMap[category] }
    });
  }
}
