import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaintingService } from "../../services/painting.service";
import { Painting } from 'src/app/models/painting.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lba-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  paintings: Array<Painting> = [];
  subscription: Subscription;

  constructor(private paintingService: PaintingService) { }

  ngOnInit() {
    // Get all paintings
    this.subscription = this.paintingService.getAllPaintings().valueChanges()
      .subscribe(paintings => {
        this.paintings = paintings;
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  viewLarge(event) {
    console.log(event);
  }

}
