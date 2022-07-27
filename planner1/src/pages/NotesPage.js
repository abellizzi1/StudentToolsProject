import React from 'react';
import { Link } from "react-router-dom";
import './NotesPage.css';

export default function NotesPage() {



    return (
        <div>
            <div className = 'content'>
                <button className = 'topButtons'>Notes</button>
                <button className = 'topButtons'>Tasks</button>
                <div className = 'notes'>
                    <div className = 'note-toolbar'>

                    </div>
                </div>
            </div>
            
        </div>

    )
}
