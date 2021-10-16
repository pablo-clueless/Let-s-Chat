import React from 'react';
import firebase from 'firebase/compat/app';

const SignIn = () => {
    const auth = firebase.auth();

    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
    }
    return (
      <>
      <button onClick={signInWithGoogle} className="sign-in">Sign in with Google</button>
      <p>Please respect all users and be civil in engagement</p>
      </>
    )
 };

export default SignIn
