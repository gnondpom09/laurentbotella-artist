import { Component, OnInit, Input } from '@angular/core';
import { Painting } from 'src/app/models/painting.model';
import { Router } from "@angular/router";

@Component({
  selector: 'lba-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent implements OnInit {

  @Input() painting: Painting;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewDetail(painting: Painting) {
    this.router.navigateByUrl(`painting-detail/${painting.id}`);
  }

}
