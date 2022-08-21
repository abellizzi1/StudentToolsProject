# Student Tools Project

This website is deployed on Heroku:
https://student-tools-project.herokuapp.com/
**Do not use the version on github pages**

**A responsive MERN website with many useful student tools.**
Some tools include Notes, Tasks, Group Tasks, and Messaging. Certain tools can only be accessed while logged in, while other tools can be accessed as a guest. I created this website with the goal of making it easy for students to organize group assignments and their own assignments/notes.

# Features Accessible Only While Logged In
**Friends**
To add a friend, the user must enter the recipient's email and add them. Then, the recipient must add the user back for them to become friends. After two people are friends, they are able to send each other messages and add each other to group tasks.

**Group Tasks**
If a user has friends added, they are able to create a task and share it with those friends to create a group. A task includes a title, description, and a deadline. Once a task and its group is created, any of the group members can create more posts within the task to discuss anything they need to. 

**Messaging**
A conversation is started by clicking "Send Message" on the Friends page. After a conversation is started, it will show up in the Messages page for both the sender and recipient and they can continue sending messages on the Messages page.

# Features Accessible As a Guest
**Notes**
Guests are able to create notes and they will be automatically saved on-change. For desktop users, they save to local storage, but for mobile users, they are only saved in the current session.

**Tasks**
Guests can create tasks with a title, description, and deadline to keep track of what they have to do. Similar to the Notes tool, they will be saved to local storage for desktop users, but only saved in the current session for mobile users.
