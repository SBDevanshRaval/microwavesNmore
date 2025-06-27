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
    title: 'Germ Guardian',
    description: 'Fight allergies, germs, and odors with the powerful GermGuardian HEPA Air Purifier by Guardian Technologies. Featuring a True HEPA filter, this purifier captures 99.97% of airborne particles, including dust, pollen, pet dander, mold spores, and smoke. Ideal for bedrooms, living rooms, and offices, it uses UV-C light technology to help eliminate bacteria and viruses, making it perfect for families, allergy sufferers, and pet owners.With its sleek design, quiet operation, and energy-efficient performance, this air purifier enhances your indoor air quality while blending seamlessly into any space. Say goodbye to sneezing, coughing, and lingering odors — and hello to fresher, healthier air.',
    bundle_price: 1874.34,
    retail_total: 4806,
    images: ['assets/products/bundle/germ_bundle.png'],
    category: 'air purifier',
    bulk: [
    {
      name: 'GermGuardian 4-in-1 Air Purifier (AC4100DBLX)',
      id: 1,
      brand: 'GermGuardian',
      quantity: 54,
      retailPrice: 89,
      retailTotal: 4806,
      unitPrice: 34.71,
      total: 1874.34
    }
    ]
    },
    {
    title: 'Microwave',
    // description: '',
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
    },
    {
    title: 'Air Fryer Bundle – Premium Multi-Brand Kitchen Upgrade',
    description: 'Upgrade your kitchen or retail inventory with this high-value Air Fryer Bundle, featuring 11 top-rated air fryers and convection ovens from premium brands like Ninja, Gourmia, Black+Decker, Emeril Lagasse, GreenPan, Kalorik, and Nuwave.',
    bundle_price: 665.15,
    retail_total: 1899.53,
    images: ['assets/products/bundle/air_fryer_bundle.png'],
    category: 'air fryer',
    bulk: [
    {
      name: 'GreenPan Dual Zone Air Fryer (8.5 QT)',
      id: 1,
      quantity: 1,
      retailPrice: 199,
      retailTotal: 199,
      unitPrice: 69.95,
      total: 69.95
    },
    {
      name: 'Emeril Lagasse Power Grill 360 Plus',
      id: 2,
      quantity: 1,
      retailPrice: 185.53,
      retailTotal: 185.53,
      unitPrice: 64.95,
      total: 64.95
    },
    {
      name: 'Black+Decker Extra Wide Convection Oven',
      id: 3,
      quantity: 1,
      retailPrice: 227,
      retailTotal: 227,
      unitPrice: 79.45,
      total: 79.45
    },
    {
      name: 'Kalorik 4.3L Digital Air Fryer',
      id: 4,
      quantity: 1,
      retailPrice: 94,
      retailTotal: 94,
      unitPrice: 32.9,
      total: 32.9
    },
    {
      name: 'Kalorik MAXX Advance 26 QT Air Fryer Oven',
      id: 5,
      quantity: 1,
      retailPrice: 279,
      retailTotal: 279,
      unitPrice: 97.65,
      total: 97.65
    },
    {
      name: 'Gourmia Digital Air Fryer (3 Qt)',
      id: 6,
      quantity: 2,
      retailPrice: 99,
      retailTotal: 198,
      unitPrice: 34.65,
      total: 69.3
    },
    {
      name: 'Gourmia Digital Window Air Fryer (6 Qt)',
      id: 7,
      quantity: 1,
      retailPrice: 149,
      retailTotal: 149,
      unitPrice: 52.15,
      total: 52.15
    },
    {
      name: 'Salton Digital Air Fryer (4.5L / 4.75QT)',
      id: 8,
      quantity: 1,
      retailPrice: 79,
      retailTotal: 79,
      unitPrice: 27.65,
      total: 27.65
    },
    {
      name: 'Ninja Max XL Air Fryer (AF161C)',
      id: 9,
      quantity: 1,
      retailPrice: 280,
      retailTotal: 280,
      unitPrice: 98,
      total: 98
    },
    {
      name: 'Nuwave Brio 15.5 QT Digital Air Fryer',
      id: 10,
      quantity: 1,
      retailPrice: 209,
      retailTotal: 209,
      unitPrice: 73.15,
      total: 73.15
    }
    ]
    },
    {
    title: 'Kitchen Appliance Bundle – 10-Piece High-Performance Essentials for Modern Homes',
    description: 'Looking to upgrade your kitchen or build inventory for your appliance store or online resale business? This premium Kitchen Appliance Bundle includes 10 must-have small kitchen appliances, ideal for home chefs, gift sets, or resellers across Toronto, Ottawa, and the GTA.',
    bundle_price: 548.8,
    retail_total: 1568.9,
    images: ['assets/products/bundle/kitchen_appliances_bundle.png'],
    category: 'kitchen appliance',
    bulk: [
    {
      name: '14-Cup Programmable Coffee Maker with Signature Carafe',
      id: 1,
      quantity: 1,
      retailPrice: 199,
      retailTotal: 199,
      unitPrice: 69.65,
      total: 69.65
    },
    {
      name: '6Qt Slow Cookers',
      id: 2,
      quantity: 2,
      retailPrice: 199,
      retailTotal: 398,
      unitPrice: 69.65,
      total: 139.3
    },
    {
      name: 'Extra Large Electric Griddles',
      id: 3,
      quantity: 2,
      retailPrice: 99,
      retailTotal: 198,
      unitPrice: 34.65,
      total: 69.3
    },
    {
      name: 'Perfect Grind Single Serve Coffee Maker',
      id: 4,
      quantity: 1,
      retailPrice: 159,
      retailTotal: 159,
      unitPrice: 55.65,
      total: 55.65
    },
    {
      name: '1 Litre Kettle',
      id: 5,
      quantity: 1,
      retailPrice: 79,
      retailTotal: 79,
      unitPrice: 27.65,
      total: 27.65
    },
    {
      name: 'Slim Espresso Maker',
      id: 6,
      quantity: 1,
      retailPrice: 279,
      retailTotal: 279,
      unitPrice: 97.65,
      total: 97.65
    },
    {
      name: '5.3 Qt Stand Mixer',
      id: 7,
      quantity: 1,
      retailPrice: 199,
      retailTotal: 199,
      unitPrice: 69.65,
      total: 69.65
    },
    {
      name: 'Beautiful 12-Piece Blender Set (White Icing)',
      id: 8,
      quantity: 1,
      retailPrice: 57.9,
      retailTotal: 57.9,
      unitPrice: 19.95,
      total: 19.95
    }
    ]
    },
    {
    title: 'Rice Cooker Bundle – 6-Unit Compact & Versatile Set',
    description: 'This Rice Cooker Bundle features 6 compact and family-friendly models perfect for households, meal preppers, and small kitchens. Whether you’re a home chef or a kitchen appliance reseller, this bundle provides top-selling models at unbeatable wholesale rates.',
    bundle_price: 106.55,
    retail_total: 305,
    images: ['assets/products/bundle/rick_cooker_bundle.png'],
    category: 'rice cooker',
    bulk: [
    {
      name: 'Aroma Rice & Grain Cooker (ARC-302NG)',
      id: 1,
      quantity: 2,
      retailPrice: 86,
      retailTotal: 172,
      unitPrice: 30,
      total: 60
    },
    {
      name: 'Aroma Rice & Grain Cooker (ARC-373NGD)',
      id: 2,
      quantity: 1,
      retailPrice: 27,
      retailTotal: 27,
      unitPrice: 9.45,
      total: 9.45
    },
    {
      name: 'Dash Mini Rice Cooker (2-Cup)',
      id: 3,
      quantity: 1,
      retailPrice: 44,
      retailTotal: 44,
      unitPrice: 15.4,
      total: 15.4
    },
    {
      name: 'Aroma Rice & Grain Cooker (ARC-914SB)',
      id: 4,
      quantity: 2,
      retailPrice: 31,
      retailTotal: 62,
      unitPrice: 10.85,
      total: 21.7
    }
    ]
    },
    {
    title: 'Pawbo+ Wireless Interactive Pet Camera Bundle – Stay Connected with Your Pet, Anytime',
    description: 'Give pet parents peace of mind with the Pawbo+ Wireless Interactive Pet Camera Bundle, featuring 18 units of this top-rated smart pet monitor. The Pawbo+ lets users see, talk to, and play with their pets remotely via a mobile app — thanks to its HD live video, 2-way audio, and built-in laser toy for interactive fun.',
    bundle_price: 306,
    retail_total: 1242,
    images: ['assets/products/bundle/pawbo_bulk.png'],
    category: 'pet camera',
    bulk: [
    {
      name: 'Pawbo+ Wireless Interactive Pet Camera',
      id: 1,
      quantity: 18,
      retailPrice: 69,
      retailTotal: 1242,
      unitPrice: 17,
      total: 306
    }
    ]
    },
   {
  title: 'Crock-Pot Slow Cooker Mega Bundle – Set & Forget, Family-Size Convenience',
  description: 'Perfect for meal prepping, entertaining, or bulk cooking, this Crock-Pot Slow Cooker Bundle offers everything you need to slow cook with ease and style. With 28 units across 7 top-rated models, including Cook & Carry, Classic, and Easy-to-Clean stainless steel designs, this bundle is ideal for home chefs, catering services, or retail resellers.',
  bundle_price: 665,
  retail_total: 1915.84,
  images: ['assets/products/bundle/slow_cooker_bundle.png'],
  category: 'slow cooker',
  bulk: [
    {
      name: 'Crock-Pot 7-Qt Cook & Carry Slow Cooker (Blue)',
      id: 1,
      quantity: 3,
      retailPrice: 103,
      retailTotal: 309,
      unitPrice: 36.05,
      total: 108.15
    },
    {
      name: 'Crock-Pot 6-Qt Cook & Carry Design Series Slow Cooker (Toasted Plum/Burgundy)',
      id: 2,
      quantity: 3,
      retailPrice: 56,
      retailTotal: 168,
      unitPrice: 19.6,
      total: 58.8
    },
    {
      name: 'Crock-Pot Classic 4.5-Quart Slow Cooker (Toasted Plum/Burgundy)',
      id: 3,
      quantity: 12,
      retailPrice: 29.99,
      retailTotal: 359.88,
      unitPrice: 10.15,
      total: 121.8
    },
    {
      name: 'Crock-Pot Classic 4.5-Quart Slow Cooker (Stainless Steel)',
      id: 4,
      quantity: 4,
      retailPrice: 29.99,
      retailTotal: 119.96,
      unitPrice: 10.15,
      total: 40.6
    },
    {
      name: 'Crock-Pot Classic 8-Quart Slow Cooker with Bonus Little Dipper',
      id: 5,
      quantity: 1,
      retailPrice: 89,
      retailTotal: 89,
      unitPrice: 31.15,
      total: 31.15
    },
    {
      name: 'Crock-Pot 7-Qt Easy to clean',
      id: 6,
      quantity: 3,
      retailPrice: 258,
      retailTotal: 774,
      unitPrice: 90.3,
      total: 270.9
    },
    {
      name: 'Crock-Pot 7-Qt Slow Cooker classic (Stainless Steel)',
      id: 7,
      quantity: 2,
      retailPrice: 48,
      retailTotal: 96,
      unitPrice: 16.8,
      total: 33.6
    }
  ]
},
    {
    title: 'Hair Styling Bundle – Pro-Level Tools for Effortless Glam',
    description: "Get salon-quality results from home with the ultimate Hair Styling Bundle, featuring 9 premium tools from top brands like Conair and Revlon. Whether you're straightening, curling, blow-drying, or volumizing, this complete set equips you with everything you need to achieve flawless styles for every occasion.Includes best-sellers like the Conair Curl Collective 3-in-1 Ceramic Wand, InfinitiPRO Tourmaline Hot Air Brush, and Revlon Triple Barrel Hair Waver — all paired with high-performance dryers, mini flat irons, and volumizing rollers.",
    bundle_price: 198.14,
    retail_total: 557, // Total of all retail prices
    images: ['assets/products/bundle/hair_dryer_bundle.png'],
    category: 'hair styling',
    bulk: [
    {
      name: 'Conair Curl Collective 3-in-1 Ceramic Curling Wand',
      id: 1,
      quantity: 1,
      retailPrice: 82,
      retailTotal: 82,
      unitPrice: 28.7,
      total: 28.7
    },
    {
      name: 'Conair Curl Collective 1875W Ceramic Dryer',
      id: 2,
      quantity: 1,
      retailPrice: 49,
      retailTotal: 49,
      unitPrice: 17.1,
      total: 17.1
    },
    {
      name: 'Revlon Perfectly Flawless Finish Hair Dryer',
      id: 3,
      quantity: 1,
      retailPrice: 49,
      retailTotal: 49,
      unitPrice: 17.1,
      total: 17.1
    },
    {
      name: 'Conair Double Ceramic Volumizing Rollers',
      id: 4,
      quantity: 3,
      retailPrice: 29.98,
      retailTotal: 89.94,
      unitPrice: 10.43,
      total: 31.29
    },
    {
      name: 'Revlon Triple Barrel Hair Waver (Pink)',
      id: 5,
      quantity: 1,
      retailPrice: 71,
      retailTotal: 71,
      unitPrice: 24.85,
      total: 24.85
    },
    {
      name: 'Conair Unbound Cordless Mini Flat Iron (Rose Gold)',
      id: 6,
      quantity: 2,
      retailPrice: 42,
      retailTotal: 84,
      unitPrice: 14.7,
      total: 29.4
    },
    {
      name: 'Conair 2-in-1 Hot Air Brush (Rose Gold)',
      id: 7,
      quantity: 1,
      retailPrice: 46,
      retailTotal: 46,
      unitPrice: 16.1,
      total: 16.1
    },
    {
      name: 'Conair InfinitiPRO Tourmaline Ceramic Hot Air Brush',
      id: 8,
      quantity: 1,
      retailPrice: 51,
      retailTotal: 51,
      unitPrice: 17.85,
      total: 17.85
    },
    {
      name: 'Conair Turbo Heat 1.5" Curling Iron (Rose Gold)',
      id: 9,
      quantity: 1,
      retailPrice: 45,
      retailTotal: 45,
      unitPrice: 15.75,
      total: 15.75
    }
    ]
    },
{
  title: 'Ultimate Massager Bundle – Total Body Relaxation, Anytime, Anywhere',
  description: 'Unwind, recharge, and recover with this all-in-one Massager Bundle, designed for complete at-home therapy and deep-tissue relief. Featuring premium wellness tools from Homedics and Sharper Image, this bundle is perfect for athletes, office workers, or anyone in need of stress and muscle tension relief.With 30x Homedics Body Flex Air Compression Stretching Mats, 10x Homedics Total Relaxation Devices, and 6x Sharper Image Power Percussion Pro+ Massage Guns, you’ll enjoy head-to-toe support through air compression, vibration, and percussion therapy. Plus, bonus units of the Homedics Compact Hot & Cold Massager and Relaxation for Everybody device make this a complete relaxation kit ideal for gifting or group wellness use.',
  bundle_price: 2735.95,
  retail_total: 8215,
  images: ['assets/products/bundle/massager_bundle.png'],
  category: 'massager',
  bulk: [
    {
      name: 'Homemedics Body Flex Compression Stretching Mat',
      id: 1,
      quantity: 30,
      retailPrice: 199,
      retailTotal: 5970,
      unitPrice: 65,
      total: 1950
    },
    {
      name: 'Homedics Total relaxation',
      id: 2,
      quantity: 10,
      retailPrice: 130,
      retailTotal: 1300,
      unitPrice: 45.5,
      total: 455
    },
    {
      name: 'Sharper Image Power Percussion Pro+ Compact Massage Gun',
      id: 3,
      quantity: 6,
      retailPrice: 130,
      retailTotal: 780,
      unitPrice: 45.5,
      total: 273
    },
    {
      name: 'Homedics Compact Hot & Cold Massager',
      id: 4,
      quantity: 1,
      retailPrice: 70,
      retailTotal: 70,
      unitPrice: 24.5,
      total: 24.5
    },
    {
      name: 'Homedics Relaxation for Everybody',
      id: 5,
      quantity: 1,
      retailPrice: 95,
      retailTotal: 95,
      unitPrice: 33.45,
      total: 33.45
    }
  ]
},
{
  title: 'Tineco & Cordless Vacuum Mega Bundle – Power Clean Anywhere, Anytime',
  description: "Revolutionize your cleaning routine with this ultimate cordless vacuum bundle, featuring 6 high-performance tools from top brands like Tineco, Dsorupa, and Dirt Devil. Whether you're tackling pet hair, hardwood floors, stairs, or tight spaces, this powerhouse collection gives you the right tool for every job — all at a massive discount.Includes 2x Tineco iFLOOR 2 Max Cordless Floor Washers, Tineco GO PET, A10-D Plus, and GO Series stick vacuums, plus ultra-light options from Dsurupa and Dirt Devil. With long-lasting battery life, bagless designs, and advanced suction technology, this value-packed bundle is perfect for families, pet owners, or small business cleaning crews.",
  bundle_price: 1325,
  retail_total:  2213.97,
  images: ['assets/products/bundle/vaccum_cleaner_bundle.png'],
  category: 'vacuum & floor washer',
  bulk: [
    {
      name: 'Tineco iFLOOR 2 Max Cordless Floor Washer',
      id: 1,
      quantity: 2,
      retailPrice: 249.99,
      retailTotal: 499.98,
      unitPrice: 149.99,
      total: 298
    },
    {
      name: 'Tineco GO PET Cordless Vacuum',
      id: 2,
      quantity: 1,
      retailPrice: 449,
      retailTotal: 449,
      unitPrice: 269,
      total: 269
    },
    {
      name: 'Tineco A10-D Plus Cordless Stick Vacuum',
      id: 3,
      quantity: 1,
      retailPrice: 189.99,
      retailTotal: 189.99,
      unitPrice: 113.97,
      total: 113.97
    },
    {
      name: 'Tineco GO Series Cordless Stick Vacuum',
      id: 4,
      quantity: 1,
      retailPrice: 249,
      retailTotal: 249,
      unitPrice: 149.4,
      total: 149.4
    },
    {
      name: 'Dsurupa v10 ultra cordless vaccum cleaner',
      id: 5,
      quantity: 1,
      retailPrice: 129,
      retailTotal: 129,
      unitPrice: 77.4,
      total: 77.4
    },
    {
      name: 'Dirt Devil Cordless Versa 3-in-1 Stick Vacuum',
      id: 6,
      quantity: 1,
      retailPrice: 99,
      retailTotal: 99,
      unitPrice: 59.4,
      total: 59.4
    },
     {
      name: 'Lg cordzero a9 stick vacuum charge plus , Mate silver , refurbished',
      id: 7,
      quantity: 2,
      retailPrice: 299,
      retailTotal: 598,
      unitPrice: 179.4,
      total: 358.8
    },
 
  ]
},
{
  title: 'Juicers Bundle',
  bargain: true,
  bundle_price: 9750,
  retail_total: 53040,
  description: 'Juilist Juicer (AMR526) , Housnat centrifugal juicer (AMR516) , Aiheal centrifugal juicer (AMR516) Comes assorrted includes juicer plug in machine, cover, pusher ,container with removable lid   . They all come in black with brushed silver base .',
  images: [
    'assets/products/bundle/juicer/j1.jpg',
    'assets/products/bundle/juicer/j2.jpeg',
    'assets/products/bundle/juicer/j3.jpeg',
    'assets/products/bundle/juicer/j4.jpeg',
    'assets/products/bundle/juicer/j5.jpeg',
    'assets/products/bundle/juicer/j6.jpeg',
  ],
  category: 'juicer',
  bulk: [
    {
      name: 'Julist ,HOUSNAT,AI HEAL JUICERS',
      id: 1,
      quantity: 390 ,
      retailPrice: 136,
      retailTotal: 53040 ,
      unitPrice: 25 ,
      total: 9750
    },]
}
];

  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog,
  ) {
    this.route.queryParams.subscribe(searchValue => {
      if(searchValue['search'] !== undefined && searchValue['search'] !== null && searchValue['search'] != '') {
        this.searchTerm = searchValue['search'] 
        this.filteredItems;
      }
    })
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

  clearSearch() {
    this.searchTerm = '';
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
