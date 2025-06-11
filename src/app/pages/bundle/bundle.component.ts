import { Component } from '@angular/core';
import { ProductDetailsDialogComponent } from '../catalog/product-details-dialog/product-details-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent {
  imageLoadingState: { [key: string]: boolean } = {};
  currentImageIndex: { [key: string]: number } = {};
  paginatedItems: any[] = [];
  pageSize = 6;
  currentPage = 1;
  searchTerm: string = '';
  selectedCategory: string = '';

  categories = ['All', 'kitchen', 'electronics', 'furniture', 'combo'];

  bundles = [
    {
      title: 'Toaster Bundle',
      bundle_price: 334.6,
      images: ['assets/products/bundle/toaster_bundle.png'],
      category: 'toaster',
        bulk : [
        {
          name: 'Toastmaster 4-Slice Toaster Oven',
          id: 1,
          brand: 'Select Brands',
          quantity: 1,
          unitPrice: 15.4,
          total: 15.4
        },
        {
          name: 'Hamilton Beach 2-in-1 Oven & Toaster',
          id: 2,
          brand: 'Walmart',
          quantity: 1,
          unitPrice: 45.15,
          total: 45.15
        },
        {
          name: 'CRUXGG 2-Slice Toaster',
          id: 3,
          brand: 'Best Buy',
          quantity: 1,
          unitPrice: 13.65,
          total: 13.65
        },
        {
          name: 'Cuisinart 2-Slice Classic Metal Toaster',
          id: 4,
          brand: 'Cuisinart',
          quantity: 1,
          unitPrice: 41.65,
          total: 41.65
        },
        {
          name: 'Cuisinart Custom Select 2-Slice Toaster',
          id: 5,
          brand: 'Costco',
          quantity: 1,
          unitPrice: 13.65,
          total: 13.65
        },
        {
          name: 'Cuisinart Classic 4-Slice Metal Toaster',
          id: 6,
          brand: 'Crate and Barrel',
          quantity: 1,
          unitPrice: 55.65,
          total: 55.65
        },
        {
          name: 'Figmint 2-Slice Wide Slot Toaster',
          id: 7,
          brand: 'eBay',
          quantity: 4,
          unitPrice: 15.05,
          total: 60.2
        },
        {
          name: 'Bella 2-Slice Slim Long Slot Toaster',
          id: 8,
          brand: 'Amazon',
          quantity: 2,
          unitPrice: 25.9,
          total: 51.8
        },
        {
          name: 'Kitchensmith by Bella 4-Slice Toaster',
          id: 9,
          brand: 'Target',
          quantity: 2,
          unitPrice: 6.65,
          total: 13.3
        },
        {
          name: 'FOHERE Toaster TA7009C-UL',
          id: 10,
          brand: 'FOHERE',
          quantity: 1,
          unitPrice: 24.15,
          total: 24.15
        }
      ]
    },
    {
      title: 'Germ Guardian ',
      bundle_price: 2106,
      images: ['assets/products/bundle/germ_bundle.png'],
      category: 'air purifier',
      bulk : [
        {
          name: 'GermGuardian 4-in-1 Air Purifier (AC4100DBLX)',
          id: 1,
          brand: 'FOHERE',
          quantity: 54,
          unitPrice: 39,
          total: 2106
        }
      ]
    },
    {
      title: 'Microwave',
      bundle_price: 917,
      images: ['assets/products/bundle/microwave_bundle.png'],
      category: 'microwave',
      note: "60 days warranty can be purchased for each microwave for just extra 5$ per unit",
      bulk : [
        {
          name: 'Hamilton Beach Microwave 0.7cc',
          id: 1,
          quantity: 9,
        },
        {
          name: 'WestingHouse Microwave 0.9cc',
          id: 2,
          quantity: 3,
        },
        {
          name: 'Hamilton Beach Microwave 1.1cc',
          id: 3,
          quantity: 5,
        }
      ]
    }
     
  ];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    this.bundles.forEach(bundle => {
      this.currentImageIndex[bundle.title] = 0;
      this.imageLoadingState[bundle.title] = true;
      const img = new Image();
      img.src = bundle.images[0];
      img.onload = () => {
        this.imageLoadingState[bundle.title] = false;
      };
    });
    this.forceScrollToTop();
  }

  ngOnInit(): void {
    this.forceScrollToTop();
    this.updatePaginatedItems();

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
        this.updatePaginatedItems();
        this.forceScrollToTop();
      }
    });
  }

  get filteredItems() {
    return this.bundles.filter(bundle => {
      const matchesSearch = bundle.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === '' || this.selectedCategory === 'All'
        ? true
        : bundle.category === this.selectedCategory;
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

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 3) {
        pages.push(2, 3, 4, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1, totalPages);
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

  onImageLoad(bundle: any) {
    this.imageLoadingState[bundle.title] = false;
  }

  isImageLoading(bundle: any): boolean {
    return this.imageLoadingState[bundle.title];
  }

  nextImage(bundle: any) {
    this.imageLoadingState[bundle.title] = true;
    this.currentImageIndex[bundle.title] = 
      (this.currentImageIndex[bundle.title] + 1) % bundle.images.length;

    const nextIndex = (this.currentImageIndex[bundle.title] + 1) % bundle.images.length;
    const img = new Image();
    img.src = bundle.images[nextIndex];
  }

  previousImage(bundle: any) {
    this.imageLoadingState[bundle.title] = true;
    this.currentImageIndex[bundle.title] = 
      (this.currentImageIndex[bundle.title] - 1 + bundle.images.length) % bundle.images.length;

    const prevIndex = (this.currentImageIndex[bundle.title] - 1 + bundle.images.length) % bundle.images.length;
    const img = new Image();
    img.src = bundle.images[prevIndex];
  }

  getCurrentImage(bundle: any): string {
    return bundle.images[this.currentImageIndex[bundle.title]];
  }

  openProductDetails(bundle: any): void {
    this.dialog.open(ProductDetailsDialogComponent, {
      width: '90vw',
      maxWidth: '1200px',
      height: '90vh',
      data: bundle,
      panelClass: 'product-dialog-container'
    });
  }

  private forceScrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const container = document.querySelector('.home-page-main-container');
    if (container) {
      container.scrollTop = 0;
    }
  }
  
}
