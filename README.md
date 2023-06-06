# Student Tools Project
### A responsive MERN website with many useful student tools.
I created this website with the goal of making it easy for students to organize group assignments and their own assignments/notes. Some tools include Notes, Tasks, Group Tasks, and Messaging. Certain tools can only be accessed while logged in, while other tools can be accessed as a guest.

## Features Accessible Only While Logged In
### Friends
To add a friend, the user must enter the recipient's email and add them. Then, the recipient must add the user back for them to become friends. After two people are friends, they are able to send each other messages and add each other to group tasks. (Both accounts must be already registered)
![Friends Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/FriendsPage.png)

### Group Tasks
If a user has friends added, they are able to create a task and share it with those friends to create a group. A task includes a title, description, and a deadline. Once a task and its group is created, any of the group members can create more posts within the task to discuss anything they need to. 
![Create Group Task Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/CreateGroupTaskPage.png)
![Selected Group Task Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/SelectedGroupTaskPage.png)

### Messaging
A conversation is started by clicking "Send Message" on the Friends page. After a conversation is started, it will show up in the Messages page for both the sender and recipient and they can continue sending messages on the Messages page.
![Messages Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/MessagesPage.png)

## Features Accessible As a Guest
### Notes
Guests are able to create notes and they will be automatically saved on-change. They are saved to local storage for both desktop and mobile users.
![Notes Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/NotesPage.png)

### Tasks
Guests can create tasks with a title, description, and deadline to keep track of what they have to do. Similar to the Notes tool, they will be saved to local storage for desktop and mobile users.
![Tasks Page](https://github.com/abellizzi1/StudentToolsProject/blob/main/README-pics/TasksPage.png)
