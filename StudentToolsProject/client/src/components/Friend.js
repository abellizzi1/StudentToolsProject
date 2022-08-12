import {Link} from "react-router-dom";
import '../pages/FriendsPage.css';

const Friend = ({ friendName, friendEmail, handleRemoveFriend }) => {
	
    return (
		<div className='friendBox'>
			<h3 id='friendName' className='friendBoxInfo'>Name: {friendName}</h3>
			<h3 id='friendEmail' className='friendBoxInfo'>Email: {friendEmail}</h3>
			<Link to={"/start-conversation"}>
				<button onClick={() => { localStorage.setItem('startMsgToName', friendName); localStorage.setItem('startMsgToEmail', friendEmail) } } 
				className='sendMessageButton'>Send Message</button>
			</Link>
			<button onClick={() => {handleRemoveFriend(friendEmail)} } className='friendRemoveButton'>Remove</button>
		</div>
	);
};

export default Friend;