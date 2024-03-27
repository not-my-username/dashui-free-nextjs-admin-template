import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Students",
       value : 46,
       icon: <People size={18}/>,
       statInfo: '' 
    },
    {
        id:2,
        title : "Active Tasks",
        value : 6,
        icon: <ListTask size={18}/>,
        statInfo: '' 
     },
     {
        id:3,
        title : "Productivity",
        value : '76%',
        icon: <Bullseye size={18}/>,
        statInfo: '' 
     }
];
export default ProjectsStats;
