import 'firebase/auth';
import firebase from 'firebase/compat/app';

const ChatMessage = (props) => {
    const auth = firebase.auth();
    const {text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved' ;
  
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="" />
        <p>{text}</p>
      </div>
    )
}

export default ChatMessage