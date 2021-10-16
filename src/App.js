import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Chatroom from './components/Chatroom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import { useAuthState } from 'react-firebase-hooks/auth';

import { FaComments } from 'react-icons/fa'


firebase.initializeApp({
  apiKey: "AIzaSyCsF0TrYnEgZYX5rM1d-IvgQAf9OhMdNyU",
  authDomain: "chat-app-9483a.firebaseapp.com",
  projectId: "chat-app-9483a",
  storageBucket: "chat-app-9483a.appspot.com",
  messagingSenderId: "300813036486",
  appId: "1:300813036486:web:93afacd4571f035569a0c7",
  measurementId: "G-32KQHJMW50"
});

const auth = firebase.auth();
// const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
       <h1>Let's Chat <FaComments/></h1>
       <SignOut />
      </header>
      <section>
        {user ? <Chatroom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
