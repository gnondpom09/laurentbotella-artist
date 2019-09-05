import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

  /**
   * login to app
   * @param email email of user 
   * @param password password of user
   */
  signIn(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  /**
   * Create new user in firebase
   * @param email email of user
   * @param password password of user
   */
  signUp(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }
  /**
   * Logout
   */
  logout() {
    return this.af.auth.signOut();
  }
  /**
   * Get informations of user logged
   */
  getUserLogged() {
    return this.af.authState;
  }
  /**
   * Delete account of current user
   */
  deleteUserAccount() {
    return this.af.auth.currentUser.delete();
  }
  /**
   * Send Email to reset password
   * @param email email to send link to reset password
   */
  resetPassword(email: string) {
    return this.af.auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('email sent');
        
      })
      .catch(err => {
        console.log(err);
        
      })
  }
}
