import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config.js";

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  // USER API

  user = uid => this.db.ref(`/users/${uid}`);

  users = () => this.db.ref(`/users`);
}

export default Firebase;
