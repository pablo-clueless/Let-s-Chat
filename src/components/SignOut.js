import firebase from 'firebase/compat/app';

const SignOut = () => {
    const auth = firebase.auth();

    return auth.currentUser && (
      <button onClick={() => auth.signOut()} className="sign-out">Sign Out</button>
    )
  };
  
  export default SignOut