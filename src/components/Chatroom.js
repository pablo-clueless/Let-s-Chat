import React, { useRef, useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { FaPaperPlane } from 'react-icons/fa'

const Chatroom = () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
  
    const dummy = useRef();
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async(e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;
  
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
      dummy.current.scrollIntoView({behavior: 'smooth'})
    }
  
    return(
      <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice..."/>
        <button type='submit' disabled={!formValue}><FaPaperPlane /></button>
      </form>
      </>
    )
  };

export default Chatroom
