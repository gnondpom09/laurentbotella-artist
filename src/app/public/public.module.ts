import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { BiographyComponent } from './biography/biography.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatButtonModule, MatInputModule } from "@angular/material";
import { PaintingDetailComponent } from './painting-detail/painting-detail.component';
import { PaintingComponent } from './painting/painting.component';


@NgModule({
  declarations: [
    HomeComponent, 
    GalleryComponent, 
    ContactComponent, 
    AwardsComponent, 
    BiographyComponent, 
    LoginComponent, 
    SignupComponent, PaintingDetailComponent, PaintingComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PublicModule { }
