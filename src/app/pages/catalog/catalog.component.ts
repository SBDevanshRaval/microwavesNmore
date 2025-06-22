import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from './product-details-dialog/product-details-dialog.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  // Track loading state for each image
  imageLoadingState: { [key: string]: boolean } = {};
  
  items = [
    { 
      title: 'Gourmia Digital Air fryer 3 Quartz', 
      images: ['assets/products/1_1.jpg','assets/products/1_2.jpg','assets/products/1_3.jpg'], 
      category: 'air fryer',
      msrp: 99,
      quantity: 3,
      wholesale: 39
    },
    { 
      title: 'Gourmia GAF616 6-QT Digital Window Air Fryer', 
      images: ['assets/products/2_2.jpg','assets/products/2_1.jpg','assets/products/2_3.jpg'], 
      category: 'air fryer',
      msrp: 149,
      warranty: true,
      wholesale: 59,
      quantity: 7 
    },
    { 
      title: 'Instapot 6 QT Multicooker', 
      images: ['assets/products/3_1.webp','assets/products/3_2.webp','assets/products/3_3.webp','assets/products/3_4.webp'], 
      category: 'cooker',
      size: '6 QT',
      msrp: 149,
      quantity: 10,
      warranty: true,
      pricingTiers: [
        { range: '2-6 units', price: 69 },
        { range: '6-12 units', price: 57 }
      ]
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
      title: 'GermGuardian Air Purifier', 
      images: ['assets/products/7_1.jpg','assets/products/7_2.jpg','assets/products/7_3.jpg'], 
      category: 'air purifier',
      includes: 'New filter included',
      msrp: 154,
      quantity: 60,
      warranty: false,
      pricingTiers: [
        { range: '2-6 units', price: 69 },
        { range: '6-12 units', price: 59 },
        { range: 'All 60 units', price: 39 }
      ]
    },
    { 
      title: 'shoe bench', 
      images: ['assets/products/8_1.jpg'], 
      price: 176, 
      category: 'furniture',
      quantity: 6 
    },
    { 
      title: 'Homemedics Body Flex Compression Stretching Mat', 
      images: ['assets/products/9_1.webp','assets/products/9_2.webp','assets/products/9_3.webp'], 
      category: 'massage',
      msrp: 395,
      quantity: 30,
      warranty: true,
      pricingTiers: [
        { range: '2-6 units', price: 89 },
        { range: '6-12 units', price: 79 },
        { range: 'All 30 units', price: 65 }
      ]
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
      images: ['assets/products/11_3.png','assets/products/11_2.png','assets/products/11_1.png'], 
      price: 154, 
      category: 'fridge',
      quantity: 10 
    },
    { 
      title: 'hisense 1.6 freezer/mini fridge', 
      images: ['assets/hisense-1.6.jpg'], 
      price: 129, 
      category: 'fridge',
      quantity: 5
    },
    { 
      title: 'frigidaire 7.0 white chest freezer', 
      images: ['assets/products/freezer.png'], 
      price: 449, 
      category: 'fridge',
      quantity: 7 
    }
  ];
  

  paginatedItems: any[] = [];
  pageSize = 6;
  currentPage = 1;
  searchTerm: string = '';
  selectedCategory: string = '';
  
  categories = ['All', 'air fryer', 'cooker', 'fridge', 'massage', 'air purifier', 'furniture'];

  // Track current image index for each item
  currentImageIndex: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    // Initialize current image index and loading state for each item
    this.items.forEach(item => {
      this.currentImageIndex[item.title] = 0;
      this.imageLoadingState[item.title] = true;
      
      // Preload first image of each item
      const img = new Image();
      img.src = item.images[0];
      img.onload = () => {
        this.imageLoadingState[item.title] = false;
      };
    });

    // Force scroll to top on component creation
    this.forceScrollToTop();
  }

  ngOnInit() {
    // Reset scroll position when component initializes
    this.forceScrollToTop();

    // Initialize the paginated items
    this.updatePaginatedItems();

    // Subscribe to query params and scroll to top on navigation
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        this.updatePaginatedItems();
        this.forceScrollToTop();
      }
    });
  }

  ngAfterViewInit() {
    // Ensure scroll to top after view initialization
    this.forceScrollToTop();
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

  get totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const pages: number[] = [];
    
    // Show maximum 5 page numbers
    if (totalPages <= 5) {
      // If total pages is 5 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage <= 3) {
        // If current page is near the start
        pages.push(2, 3, 4, totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If current page is near the end
        pages.push(
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // If current page is in the middle
        pages.push(
          currentPage - 1,
          currentPage,
          currentPage + 1,
          totalPages
        );
      }
    }
    
    return pages;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedItems();
      this.forceScrollToTop();
    }
  }

  updatePaginatedItems() {
    const filtered = this.filteredItems;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedItems = filtered.slice(start, end);
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.updatePaginatedItems();
    this.forceScrollToTop();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updatePaginatedItems();
    this.forceScrollToTop();
  }

  onImageLoad(item: any) {
    this.imageLoadingState[item.title] = false;
  }

  isImageLoading(item: any): boolean {
    return this.imageLoadingState[item.title];
  }

  nextImage(item: any) {
    this.imageLoadingState[item.title] = true;
    this.currentImageIndex[item.title] = 
      (this.currentImageIndex[item.title] + 1) % item.images.length;
    
    // Preload the next image
    const nextIndex = (this.currentImageIndex[item.title] + 1) % item.images.length;
    const img = new Image();
    img.src = item.images[nextIndex];
  }

  previousImage(item: any) {
    this.imageLoadingState[item.title] = true;
    this.currentImageIndex[item.title] = 
      (this.currentImageIndex[item.title] - 1 + item.images.length) % item.images.length;
    
    // Preload the previous image
    const prevIndex = (this.currentImageIndex[item.title] - 1 + item.images.length) % item.images.length;
    const img = new Image();
    img.src = item.images[prevIndex];
  }

  getCurrentImage(item: any): string {
    return item.images[this.currentImageIndex[item.title]];
  }

  private forceScrollToTop() {
    // Using multiple approaches to ensure scroll to top works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const container = document.querySelector('.home-page-main-container');
    if (container) {
      container.scrollTop = 0;
    }
  }

  openProductDetails(product: any): void {
    const dialogRef = this.dialog.open(ProductDetailsDialogComponent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '90vh',
      data: product,
      panelClass: 'product-dialog-container'
    });
  }
}
