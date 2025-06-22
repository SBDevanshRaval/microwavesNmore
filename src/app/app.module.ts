import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatInputModule } from '@angular/material/input';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSelectModule } from '@angular/material/select';
import { Blog1Component } from './pages/blog/blog1/blog1.component';
import { Blog2Component } from './pages/blog/blog2/blog2.component';
import { Blog3Component } from './pages/blog/blog3/blog3.component';
import { Blog4Component } from './pages/blog/blog4/blog4.component';
import { ProductDetailsDialogComponent } from './pages/catalog/product-details-dialog/product-details-dialog.component';
import { BundleComponent } from './pages/bundle/bundle.component';
import { WeekBundleComponent } from './shared/week-bundle/week-bundle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    CatalogComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component,
    ProductDetailsDialogComponent,
    BundleComponent,
    WeekBundleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    CarouselModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
