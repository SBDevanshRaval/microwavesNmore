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
      title: 'Gourmia Digital Air fryer 3 Quartz', 
      images: ['assets/products/1_1.jpg','assets/products/1_2.jpg','assets/products/1_3.jpg'], 
      price: 50, 
      category: 'air fryer',
      quantity: 3 
    },
    { 
      title: 'Gourmia GAF616 6-QT Digital Window Air Fryer', 
      images: ['assets/products/2_2.jpg','assets/products/2_1.jpg','assets/products/2_3.jpg'], 
      price: 60, 
      category: 'air fryer',
      quantity: 7 
    },
    { 
      title: 'Insta Pot Multi-Cooker 6 Quartz', 
      images: ['assets/products/3_1.webp','assets/products/3_2.webp','assets/products/3_3.webp','assets/products/3_4.webp'], 
      price: 60, 
      category: 'cooker',
      quantity: 10 
    },
    { 
      title: 'so yummy bella mini 2Qt Air fryer', 
      images: ['assets/products/4_1.jpg'], 
      price: 50, 
      category: 'air fryer',
      quantity: 10 
    },
    { 
      title: 'fohere waffle maker', 
      images: ['assets/products/5_1.jpg','assets/products/5_2.jpg','assets/products/5_3.jpg'], 
      price: 20, 
      category: 'waffle maker',
      quantity: 10 
    },
    { 
      title: 'fohere Double rotating waffle maker', 
      images: ['assets/products/6_1.jpg','assets/products/6_2.jpg','assets/products/6_3.jpg'], 
      price: 15, 
      category: 'waffle maker',
      quantity: 18 
    },
    { 
      title: 'gem guardian', 
      images: ['assets/products/7_1.jpg','assets/products/7_2.jpg','assets/products/7_3.jpg'], 
      price: 70, 
      category: 'air purifier',
      quantity: 60 
    },
    { 
      title: 'shoe bench', 
      images: ['assets/products/8_1.jpg'], 
      price: 176, 
      category: 'furniture',
      quantity: 6 
    },
    { 
      title: 'Homemedics body flex', 
      images: ['assets/products/9_1.webp','assets/products/9_2.webp','assets/products/9_3.webp'], 
      price: 395, 
      category: 'massage',
      quantity: 30 
    },
    { 
      title: 'so yummy bella 2Qt set of 2 slow cooker', 
      images: ['assets/products/10_2.jpg','assets/products/10_1.jpg','assets/products/10_3.jpg'], 
      price: 50, 
      category: 'cooker',
      quantity: 5 
    },
    { 
      title: 'Hisense 3.3 fridge', 
      images: ['assets/products/11_1.jpg','assets/products/11_2.jpg','assets/products/11_3.jpg'], 
      price: 154, 
      category: 'fridge',
      quantity: 10 
    },
    { 
      title: 'hisense 1.6 freezer/mini fridge', 
      images: ['assets/hisense-1.6.jpg'], 
      price: 129, 
      category: 'fridge',
      quantity: 1 
    },
    { 
      title: 'frigidaire 7.0 white chest freezer', 
      images: ['assets/frigidaire.jpg'], 
      price: 449, 
      category: 'fridge',
      quantity: 7 
    }
  ];
  

  paginatedItems: any[] = [];
  pageSize = 6;
  pageIndex = 0;
  searchTerm: string = '';
  selectedCategory: string = '';
  
  categories = ['All', 'air fryer', 'cooker', 'fridge', 'massage', 'air purifier', 'furniture'];

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
