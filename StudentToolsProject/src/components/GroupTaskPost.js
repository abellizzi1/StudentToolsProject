import '../pages/GroupTasksPage.css';

const GroupTaskPost = ({ name, date, text }) => {


    return (
		<div className='groupTaskInfoPostBorder'>
            <h3 className='groupTaskInfoPostName'>{name}</h3>
            <p className='groupTaskInfoPostDate'>{date.substring(0, 10) + " " + date.substring(11, 16)}</p>
            <p className='groupTaskInfoPosts'>{text}</p>
        </div>
	);
};

export default GroupTaskPost;