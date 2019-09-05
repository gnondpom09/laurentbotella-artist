import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Painting } from '../models/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  /**
   * Get all paintings
   */
  getAllPaintings(): AngularFirestoreCollection<Painting> {
    return this.firestore.collection('paintings');
  }
  /**
   * Get informations of painting
   * @param id id of painting
   */
  getPaintingDetail(id: string): AngularFirestoreDocument<Painting> {
    return this.firestore.collection('paintings').doc(id);
  }
}
