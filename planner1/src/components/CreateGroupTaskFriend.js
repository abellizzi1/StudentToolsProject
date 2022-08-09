import * as FaIcons from 'react-icons/fa';
import { useState } from 'react';
import {Link} from "react-router-dom";
import '../pages/GroupTasksPage.css';

const CreateGroupTaskFriend = ({ friendName, friendEmail, handleAddToGroup, handleRemoveFromGroup }) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        if (isAdded) {
            setIsAdded(false);
            handleRemoveFromGroup(friendEmail);
        }
        else {
            setIsAdded(true);
            handleAddToGroup(friendEmail);
        }
    }

    return (
		<div>
			<button onClick={() => { handleClick() } } className={`groupTasksFriendButton${isAdded ? "Selected" : ""}`}>{friendName}</button>
		</div>
	);
};

export default CreateGroupTaskFriend;