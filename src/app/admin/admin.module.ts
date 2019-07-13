import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { AddAwardComponent } from './add-award/add-award.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { EditBiographyComponent } from './edit-biography/edit-biography.component';
import { AwardListComponent } from './award-list/award-list.component';


@NgModule({
  declarations: [
    AddPaintingComponent,
    AddAwardComponent,
    PaintingListComponent,
    EditBiographyComponent,
    AwardListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
