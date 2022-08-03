import * as FaIcons from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Task = ({ id, titleText, bodyText, date, handleDeleteTask }) => {
	


    return (
		<div id={id} className='task'>
            <h1 className='taskTitle'>
                {titleText}
            </h1>
            <p className='taskText'>
                {bodyText}
            </p>

            <div className='task-toolbar'>
                <h2 className='deadlineToolbar'>
                    Deadline: {date}
                </h2>
                <button 
                    onClick={() => handleDeleteTask(id)}
                    className='taskCloseButton'>
                    {<FaIcons.FaWindowClose />}
                </button>
            </div>
        </div>
	);
};

export default Task;