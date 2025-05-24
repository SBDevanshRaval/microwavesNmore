import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  items = [
    { 
      title: 'Microwave A', 
      images: ['assets/a.jpg', 'assets/a2.jpg', 'assets/a3.jpg'], 
      price: 199.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave B', 
      images: ['assets/hero_microwaves.png', 'assets/hero_microwaves.png', 'assets/hero_microwaves.png'], 
      price: 299.99, 
      category: 'Over-the-Range' 
    },
    { 
      title: 'Microwave C', 
      images: ['assets/c.jpg', 'assets/c2.jpg', 'assets/c3.jpg'], 
      price: 159.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave D', 
      images: ['assets/d.jpg', 'assets/d2.jpg', 'assets/d3.jpg'], 
      price: 399.99, 
      category: 'Built-in' 
    },
    { 
      title: 'Microwave E', 
      images: ['assets/e.jpg', 'assets/e2.jpg', 'assets/e3.jpg'], 
      price: 249.99, 
      category: 'Over-the-Range' 
    },
    { 
      title: 'Microwave F', 
      images: ['assets/f.jpg', 'assets/f2.jpg', 'assets/f3.jpg'], 
      price: 179.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave G', 
      images: ['assets/g.jpg', 'assets/g2.jpg', 'assets/g3.jpg'], 
      price: 449.99, 
      category: 'Built-in' 
    },
    { 
      title: 'Microwave H', 
      images: ['assets/h.jpg', 'assets/h2.jpg', 'assets/h3.jpg'], 
      price: 189.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave I', 
      images: ['assets/i.jpg', 'assets/i2.jpg', 'assets/i3.jpg'], 
      price: 279.99, 
      category: 'Over-the-Range' 
    },
    { 
      title: 'Microwave J', 
      images: ['assets/j.jpg', 'assets/j2.jpg', 'assets/j3.jpg'], 
      price: 499.99, 
      category: 'Built-in' 
    },
    { 
      title: 'Microwave K', 
      images: ['assets/k.jpg', 'assets/k2.jpg', 'assets/k3.jpg'], 
      price: 169.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave L', 
      images: ['assets/l.jpg', 'assets/l2.jpg', 'assets/l3.jpg'], 
      price: 289.99, 
      category: 'Over-the-Range' 
    },
    { 
      title: 'Microwave M', 
      images: ['assets/m.jpg', 'assets/m2.jpg', 'assets/m3.jpg'], 
      price: 459.99, 
      category: 'Built-in' 
    },
    { 
      title: 'Microwave N', 
      images: ['assets/n.jpg', 'assets/n2.jpg', 'assets/n3.jpg'], 
      price: 199.99, 
      category: 'Countertop' 
    },
    { 
      title: 'Microwave O', 
      images: ['assets/o.jpg', 'assets/o2.jpg', 'assets/o3.jpg'], 
      price: 319.99, 
      category: 'Over-the-Range' 
    },
  ];

  paginatedItems: any[] = [];
  pageSize = 6;
  pageIndex = 0;
  searchTerm: string = '';
  selectedCategory: string = '';
  
  categories = ['All', 'Countertop', 'Over-the-Range', 'Built-in'];

  // Track current image index for each item
  currentImageIndex: { [key: string]: number } = {};

  constructor() {
    // Initialize current image index for each item to 0
    this.items.forEach(item => {
      this.currentImageIndex[item.title] = 0;
    });
  }

  ngAfterViewInit() {
    this.updatePaginatedItems();
  }

  get filteredItems() {
    return this.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === '' || this.selectedCategory === 'All' 
        ? true 
        : item.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  updatePaginatedItems() {
    const filtered = this.filteredItems;
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedItems = filtered.slice(start, end);
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.pageIndex = 0;
    this.updatePaginatedItems();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.pageIndex = 0;
    this.updatePaginatedItems();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedItems();
  }

  // Carousel navigation methods
  nextImage(item: any) {
    this.currentImageIndex[item.title] = 
      (this.currentImageIndex[item.title] + 1) % item.images.length;
  }

  previousImage(item: any) {
    this.currentImageIndex[item.title] = 
      (this.currentImageIndex[item.title] - 1 + item.images.length) % item.images.length;
  }

  getCurrentImage(item: any): string {
    return item.images[this.currentImageIndex[item.title]];
  }
}
