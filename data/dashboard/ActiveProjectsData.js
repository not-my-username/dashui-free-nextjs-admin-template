import {
	PersonCircle
} from 'react-bootstrap-icons';

export const ActiveProjectsData = [
    {
       id:1,
       projectName : "Sophia",
       priority : "Medium",
       priorityBadgeBg : 'warning',
       hours: 34,
       progress: 15,
       icon:<PersonCircle size={18}/>,
       members:[
        {image:'images/avatar/avatar-1.jpg'},
        {image:'images/avatar/avatar-2.jpg'},
        {image:'images/avatar/avatar-3.jpg'}
       ] 
    },
    {
        id:2,
        projectName : "Jacob",
        priority : "High",
        priorityBadgeBg : 'danger',
        hours: 47,
        progress: 35,
        icon:<PersonCircle size={18}/>,
        members:[
            {image:'images/avatar/avatar-4.jpg'},
            {image:'images/avatar/avatar-5.jpg'},
            {image:'images/avatar/avatar-6.jpg'}
        ] 
     },
     {
        id:3,
        projectName : "Noah",
        priority : "Low",
        priorityBadgeBg : 'info',
        hours: 120,
        progress: 75,
        icon:<PersonCircle size={18}/>,
        members:[
            {image:'images/avatar/avatar-7.jpg'},
            {image:'images/avatar/avatar-8.jpg'},
            {image:'images/avatar/avatar-9.jpg'}
        ] 
     },
     {
        id:4,
        projectName : "Emily",
        priority : "Medium",
        priorityBadgeBg : 'warning',
        hours: 89,
        progress: 63,
        icon:<PersonCircle size={18}/>,
        members:[
            {image:'images/avatar/avatar-10.jpg'},
            {image:'images/avatar/avatar-11.jpg'},
            {image:'images/avatar/avatar-12.jpg'}
        ] 
     },
     {
        id:3,
        projectName : "Hailey",
        priority : "Track",
        priorityBadgeBg : 'success',
        hours: 108,
        progress: 100,
        icon:<PersonCircle size={18}/>,
        members:[
            {image:'images/avatar/avatar-13.jpg'},
            {image:'images/avatar/avatar-14.jpg'},
            {image:'images/avatar/avatar-15.jpg'}
        ] 
     },
     {
        id:4,
        projectName : "Jack",
        priority : "Low",
        priorityBadgeBg : 'info',
        hours: 120,
        progress: 75,
        icon:<PersonCircle size={18}/>,
        members:[
            {image:'images/avatar/avatar-16.jpg'},
            {image:'images/avatar/avatar-17.jpg'},
            {image:'images/avatar/avatar-18.jpg'}
        ] 
     }
];
export default ActiveProjectsData;
