import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { AddAwardComponent } from './add-award/add-award.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { AwardListComponent } from './award-list/award-list.component';
import { EditBiographyComponent } from './edit-biography/edit-biography.component';


const routes: Routes = [
  { path: 'add-painting', component: AddPaintingComponent },
  { path: 'painting-list', component: PaintingListComponent },
  { path: 'add-award', component: AddAwardComponent },
  { path: 'award-list', component: AwardListComponent },
  { path: 'edit-biography', component: EditBiographyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
