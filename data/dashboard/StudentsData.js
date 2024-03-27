import {
	PersonCircle
} from 'react-bootstrap-icons';

export const StudentsData = [
    {
       id:1,
       name : "Sophia",
       priority : "Medium",
       priorityBadgeBg : 'warning',
       points: 34,
       progress: 15,
       avatar:<PersonCircle size={18}/>,
       lastActivity: '3 May, 2023',
       badges:[
        {image:'images/avatar/avatar-1.jpg'},
        {image:'images/avatar/avatar-2.jpg'},
        {image:'images/avatar/avatar-3.jpg'}
       ] 
    },
    {
        id:2,
        name : "Jacob",
        priority : "Medium",
        priorityBadgeBg : 'warning',
        points: 47,
        progress: 35,
        avatar:<PersonCircle size={18}/>,
        lastActivity: 'Today',
        badges:[
            {image:'images/avatar/avatar-4.jpg'},
            {image:'images/avatar/avatar-5.jpg'},
            {image:'images/avatar/avatar-6.jpg'}
        ] 
     },
     {
        id:3,
        name : "Noah",
        priority : "Low",
        priorityBadgeBg : 'success',
        points: 120,
        progress: 75,
        avatar:<PersonCircle size={18}/>,
        lastActivity: 'Yesterday',
        badges:[
            {image:'images/avatar/avatar-7.jpg'},
            {image:'images/avatar/avatar-8.jpg'},
            {image:'images/avatar/avatar-9.jpg'}
        ] 
     },
     {
        id:4,
        name : "Emily",
        priority : "Medium",
        priorityBadgeBg : 'warning',
        points: 89,
        progress: 63,
        avatar:<PersonCircle size={18}/>,
        lastActivity: '3 May, 2023',
        badges:[
            {image:'images/avatar/avatar-10.jpg'},
            {image:'images/avatar/avatar-11.jpg'},
            {image:'images/avatar/avatar-12.jpg'}
        ] 
     },
     {
        id:3,
        name : "Hailey",
        priority : "Low",
        priorityBadgeBg : 'success',
        points: 108,
        progress: 100,
        avatar:<PersonCircle size={18}/>,
        lastActivity: '3 May, 2023',
        badges:[
            {image:'images/avatar/avatar-13.jpg'},
            {image:'images/avatar/avatar-14.jpg'},
            {image:'images/avatar/avatar-15.jpg'}
        ] 
     },
     {
        id:4,
        name : "Jack",
        priority : "Low",
        priorityBadgeBg : 'success',
        points: 120,
        progress: 75,
        avatar:<PersonCircle size={18}/>,
        lastActivity: '3 May, 2023',
        badges:[
            {image:'images/avatar/avatar-16.jpg'},
            {image:'images/avatar/avatar-17.jpg'},
            {image:'images/avatar/avatar-18.jpg'}
        ] 
     }
];
export default StudentsData;
