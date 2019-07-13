import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { AwardsComponent } from './awards/awards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from "./contact/contact.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
