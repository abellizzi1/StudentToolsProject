import * as FaIcons from 'react-icons/fa';
import '../pages/GroupTasksPage.css';

const GroupTask = ({ title, text, deadline, id, handleViewMore, handleClose }) => {


    return (
		<div  className='task'>
            <h1 className='taskTitle'>
            {title}
            </h1>
            <p className='taskText'>
            {text}
            </p>

            <div className='task-toolbar'>
                <h2 className='deadlineToolbar'>
                Deadline: {deadline}
                </h2>
                <button onClick={() => { handleViewMore(id) } }className='viewMoreButton'>View More</button>
                <button onClick={() => { handleClose(id) } }
                    className='taskCloseButton'>
                    {<FaIcons.FaWindowClose />}
                </button>
            </div>
        </div>
	);
};

export default GroupTask;