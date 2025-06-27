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
      title: 'Gourmia 3-Quart Digital Air Fryer – Crispy, Healthy Cooking Made Easy', 
      images: ['assets/products/1_1.jpg','assets/products/1_2.jpg','assets/products/1_3.jpg'], 
      description: 'Enjoy guilt-free fried favorites with the compact and powerful Gourmia 3-Quart Digital Air Fryer. Designed with Rapid Air Circulation Technology, it crisps food to perfection with little to no oil — making it ideal for health-conscious families, busy kitchens, or first-time air fryer users.Featuring a sleek digital touch panel, one-touch presets, and a dishwasher-safe nonstick basket, this air fryer delivers quick, even cooking for fries, chicken, vegetables, and more. Its space-saving design is perfect for apartments, condos, or small countertops, while still delivering big flavor and versatility.',
      category: 'air fryer',
      msrp: 99,
      quantity: 3,
      wholesale: 39
    },
    { 
      title: 'Gourmia GAF616 6-Quart Digital Window Air Fryer – Big Capacity. Smart Cooking. Crispy Results.', 
      images: ['assets/products/2_2.jpg','assets/products/2_1.jpg','assets/products/2_3.jpg'], 
      description: 'Upgrade your kitchen with the Gourmia GAF616 Digital Air Fryer, featuring a spacious 6-quart capacity and a clear viewing window for precise cooking without opening the basket. With 12 one-touch presets, a sleek LED control panel, and advanced FryForce 360° Technology, this powerful appliance ensures fast, even cooking with up to 90% less fat than traditional frying.Perfect for families or meal prepping, it air fries, roasts, bakes, broils, and reheats with ease — making healthy, crispy meals effortless. The nonstick basket and crisper tray are dishwasher safe for easy cleanup. Certified by ETL for safety and performance.',
      category: 'air fryer',
      msrp: 149,
      warranty: true,
      wholesale: 59,
      quantity: 7 
    },
    { 
      title: 'Instant Pot 6-Quart Multicooker – 7 Appliances in 1 Powerful Kitchen Hero', 
      images: ['assets/products/3_1.webp','assets/products/3_2.webp','assets/products/3_3.webp','assets/products/3_4.webp'], 
      description: 'Simplify mealtime with the Instant Pot 6 QT Multicooker, a versatile, all-in-one appliance that functions as a pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and food warmer. Perfect for busy households, this stainless-steel multicooker delivers fast, flavorful, and healthy meals with just the press of a button.With 13 customizable Smart Programs, it prepares everything from soups and stews to tender meats, grains, and even desserts — all while cutting cooking time by up to 70%. The easy-to-read LED display, dishwasher-safe inner pot, and included silicone egg mold accessory make it a must-have for families, meal preppers, and health-focused cooks.',
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
      title: 'Fohere Belgian Waffle Maker – Crispy Golden Waffles Every Time', 
      images: ['assets/products/5_1.jpg','assets/products/5_2.jpg','assets/products/5_3.jpg'], 
      description: 'Start your morning right with the Fohere Waffle Maker, built to deliver perfectly crisp, fluffy Belgian-style waffles in minutes. Featuring adjustable browning control, non-stick cooking plates, and cool-touch handles, it’s easy to use, clean, and store — making it ideal for breakfast lovers, families, and weekend brunches.The sleek stainless steel design fits any kitchen, while dual indicator lights let you know when it’s ready to cook and ready to serve. Whether you’re into classic syrup, whipped cream, or fruit-topped creations, this waffle maker makes every bite unforgettable.',
      price: 20, 
      category: 'waffle maker',
      quantity: 10 
    },
    { 
      title: 'Fohere Double Rotating Waffle Maker – Twice the Waffles, Half the Time', 
      images: ['assets/products/6_1.jpg','assets/products/6_2.jpg','assets/products/6_3.jpg'], 
      description: 'Make breakfast faster and better with the Fohere Double Rotating Waffle Maker. This dual-batch powerhouse features two rotating waffle plates that cook evenly on both sides for perfectly golden, crispy waffles every time. The rotating mechanism ensures thorough batter distribution while saving time — ideal for families, brunch hosts, or waffle lovers on the go.Equipped with adjustable browning control, non-stick plates, and drip trays for easy cleanup, this waffle maker combines convenience, speed, and style in one compact appliance. Get restaurant-quality waffles at home — ready in minutes and made your way.',
      price: 15, 
      category: 'waffle maker',
      quantity: 18 
    },
    { 
      title: 'GermGuardian HEPA Air Purifier – Breathe Cleaner, Healthier Air', 
      images: ['assets/products/7_1.jpg','assets/products/7_2.jpg','assets/products/7_3.jpg'], 
      description: 'Fight allergies, germs, and odors with the powerful GermGuardian HEPA Air Purifier by Guardian Technologies. Featuring a True HEPA filter, this purifier captures 99.97% of airborne particles, including dust, pollen, pet dander, mold spores, and smoke. Ideal for bedrooms, living rooms, and offices, it uses UV-C light technology to help eliminate bacteria and viruses, making it perfect for families, allergy sufferers, and pet owners.With its sleek design, quiet operation, and energy-efficient performance, this air purifier enhances your indoor air quality while blending seamlessly into any space. Say goodbye to sneezing, coughing, and lingering odors — and hello to fresher, healthier air.',
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
      description: '',
      price: 176, 
      category: 'furniture',
      quantity: 6 
    },
    { 
      title: 'Homemedics Body Flex Air Compression Stretching Mat – Stretch, Relax & Rejuvenate', 
      images: ['assets/products/9_1.webp','assets/products/9_2.webp','assets/products/9_3.webp'], 
      description: 'Transform your recovery routine with the Homedics Body Flex Compression Stretching Mat, designed to mimic yoga-style stretches and help release tension, improve flexibility, and soothe sore muscles. Featuring air chambers that inflate and deflate along your body, it gently stretches your back, hips, and shoulders — all while you simply lie back and relax.Perfect for anyone with a sedentary lifestyle, chronic back pain, or post-workout soreness, this foldable mat offers 4 preset stretching programs, adjustable intensity levels, and a compact, easy-to-store design. Bring the benefits of guided stretching into your home with zero effort.',
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
      title: 'So Yummy Bella 2Qt Slow Cooker Set – Double the Flavor, Twice the Fun', 
      images: ['assets/products/10_2.jpg','assets/products/10_1.jpg','assets/products/10_3.jpg'], 
      description: "Add charm and convenience to your kitchen with the So Yummy Bella 2Qt Set of 2 Slow Cookers, featuring two vibrant, compact cookers perfect for dips, soups, desserts, and more. With playful strawberry and heart-themed designs, this duo not only cooks delicious meals but also brings a fun, colorful aesthetic to your countertop.Each 2-quart cooker includes a removable stoneware insert, cool-touch handles, and simple dial controls for easy low, high, and warm settings. Whether you ' re hosting a party, meal prepping, or sharing dishes with loved ones, this set offers versatility, style, and flavor in one adorable package.",
      price: 50, 
      category: 'cooker',
      quantity: 5 
    },
    { 
      title: 'Hisense 3.3 Cu. Ft. Compact Fridge – Sleek, Quiet, and Space-Saving Cooling', 
      images: ['assets/products/11_3.png','assets/products/11_2.png','assets/products/11_1.png'], 
      description: "Keep your drinks cold and snacks fresh with the Hisense 3.3 Cu. Ft. Mini Fridge, designed for dorm rooms, home offices, apartments, and basements. Its sleek stainless steel finish, reversible door, and adjustable glass shelves make it both stylish and functional, while the energy-efficient design keeps your power bills low.This compact refrigerator includes a separate chiller compartment, door bins for cans and bottles, and a quiet compressor that won’t disrupt your space. Whether you're storing leftovers, beverages, or meal preps, it delivers convenience and reliability in a modern, space-saving form.",
      price: 154, 
      category: 'fridge',
      quantity: 10 
    },
    { 
      title: 'hisense 1.6 freezer/mini fridge', 
      images: ['assets/hisense-1.6.jpg'], 
      description: '',
      price: 129, 
      category: 'fridge',
      quantity: 5
    },
    { 
      title: 'Frigidaire 7.0 Cu. Ft. Chest Freezer – Spacious, Reliable Deep Freeze Storage', 
      images: ['assets/products/freezer.png'], 
      description: 'Maximize your food storage with the Frigidaire 7.0 Cu. Ft. White Chest Freezer, perfect for bulk grocery buys, frozen meals, and meal prep. Designed with a top-open lid, removable wire storage basket, and adjustable temperature controls, this deep freezer offers flexible organization and reliable freezing power.Its compact footprint makes it ideal for basements, garages, or utility rooms, while the quiet operation and energy-efficient design keep your home comfortable and your power bill low. Store more, waste less, and enjoy frozen food at your fingertips.',
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
