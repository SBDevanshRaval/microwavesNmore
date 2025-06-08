import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { Blog1Component } from './pages/blog/blog1/blog1.component';
import { Blog2Component } from './pages/blog/blog2/blog2.component';
import { Blog3Component } from './pages/blog/blog3/blog3.component';
import { Blog4Component } from './pages/blog/blog4/blog4.component';
import { BundleComponent } from './pages/bundle/bundle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // fix added here
  { path: 'home', component: HomeComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: 'bundle', component: BundleComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog1', component: Blog1Component },
  { path: 'blog2', component: Blog2Component },
  { path: 'blog3', component: Blog3Component },
  { path: 'blog4', component: Blog4Component },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // Wildcard route for 404 page (optional)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
