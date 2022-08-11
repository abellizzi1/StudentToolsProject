import '../pages/MessagesPage.css';

const ConversationMessages = ({ receiver, text, date }) => {
	
    /*
    Returns each conversation message based on the selected ExistingConversation.
    They are returned in the order of date/time the message was created.
    */

    return (
		<div>
        <p className={`messageDate${receiver === localStorage.getItem('loggedInEmail') ? "Left" : "Right"}`}>
          {date.substring(0, 10) + " " + date.substring(11, 16)}
        </p>
			  <p className={`messageText${receiver === localStorage.getItem('loggedInEmail') ? "Left" : "Right"}`}>{text}</p>
		</div>
	);
};

export default ConversationMessages;