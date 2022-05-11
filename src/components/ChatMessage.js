import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FaTrash } from 'react-icons/fa';

const ChatMessage = (props) => {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const {text, uid, photoURL } = props.message;

    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved' ;

    const [messages] = useCollectionData(query, {idField: 'id'});


    const deleteMessage = () => {}
  
    return (
      <div className={`message ${messageClass}`}>
        <FaTrash className='delete' onClick={deleteMessage}/>
        <img src={photoURL} alt="" />
        <p>{text}</p>
      </div>
    )
}

export default ChatMessage