import { Component, OnInit, Input, Output , EventEmitter, OnDestroy} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PaintingService } from "../../services/painting.service";
import { Painting } from 'src/app/models/painting.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lba-painting-detail',
  templateUrl: './painting-detail.component.html',
  styleUrls: ['./painting-detail.component.scss']
})
export class PaintingDetailComponent implements OnInit, OnDestroy {

  id: string = '';
  subscription: Subscription
  painting: Painting;
  @Output() image = new EventEmitter();

  constructor(
    private paintingService: PaintingService,
    private route: ActivatedRoute
    ) { 
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
    }

  ngOnInit() {
    // Get informations of painting
    this.subscription = this.paintingService.getPaintingDetail(this.id).valueChanges()
      .subscribe(painting => {
        this.painting = painting;
        console.log(this.painting.title);
        
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Open modal to view large image
   * @param path path of image
   */
  viewLarge(path: string) {
    this.image.emit(path);
  }

}
