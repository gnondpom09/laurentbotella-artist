import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storage: Storage,
    private firestore: AngularFirestore
    ) { }

  /**
   * Get uid of user logged
   */
  getUid() {
    return this.storage.getItem('uid');
  }
  /**
   * Get all users
   */
  getAllUsers(): AngularFirestoreCollection<User> {
    return this.firestore.collection('users');
  }

  /**
   * Get users list by role
   * @param role role of user
   */
  getUsersByRole(role: string): AngularFirestoreCollection<User> {
    return this.firestore.collection('users', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('role', '==', role);
      return query;
    })
  }
  /**
   * Get informations of user 
   * @param id id of user
   */
  getUserDetail(id: string): AngularFirestoreDocument<User> {
    return this.firestore.collection('users').doc(id);
  }
  /**
   * create new user in database
   * @param id id of user
   * @param pseudo pseudo of user
   * @param email email
   * @param role role
   * @param avatar path of image avatar
   */
  createNewUser(id: string, pseudo: string, email: string, role: string, avatar: string = null): Promise<void> {
    return this.firestore.collection('users').doc(id).set({
      id: id,
      pseudo: pseudo,
      email: email,
      role: role,
      avatar: avatar
    })
  }
  /**
   * delete user 
   * @param id id of user
   */
  deleteUser(id: string): Promise<void> {
    return this.firestore.collection('users').doc(id).delete();
  }
}
