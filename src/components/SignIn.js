import React from 'react';
import firebase from 'firebase/compat/app';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignIn = () => {
    const auth = firebase.auth();

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithRedirect(provider);
    }

    const signInWithGithub = () => {
      const provider = new firebase.auth.GithubAuthProvider();
      auth.signInWithRedirect(provider)
    }
    return (
      <>
      <button onClick={signInWithGoogle} className="sign-in">Sign in with Google <FaGoogle/></button>
      <button onClick={signInWithGithub} className='sign-in' disabled>Sign in with Github <FaGithub /></button>
      <p>Please respect all users and be civil in engagement</p>
      </>
    )
 };

export default SignIn
