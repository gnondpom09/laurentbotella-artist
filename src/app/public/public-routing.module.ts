import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './biography/biography.component';
import { AwardsComponent } from './awards/awards.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaintingDetailComponent } from './painting-detail/painting-detail.component';
import { PaintingComponent } from './painting/painting.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'painting', component: PaintingComponent },
  { path: 'painting-detail/:id', component: PaintingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
