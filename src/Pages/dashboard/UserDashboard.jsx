import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TaskLists from './TaskLists';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const UserDashboard = () => {
    const tasks = useLoaderData()
    
    
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "task",
    //     drop: (item) => addItemToSection(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver()
    //     })
    // }))
    // console.log(isOver);
    // const addItemToSection=(id)=>{
    //     console.log("drop",id);
    // }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='md:m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between '>
                <div className=''>
                    <div className='bg-gray-700 py-5 pl-3 rounded-lg border-2 border-black'>
                        <h1 className='text-gray-50 text-2xl'> Task</h1>
                    </div>
                    {
                        tasks?.map(task=> <TaskLists key={task._id} task={task}></TaskLists> )
                    }

                </div>
                <div className=''>
                    
                    <div className='bg-sky-700 py-5 pl-3 rounded-lg border-2 border-black'>
                        <h1 className='text-gray-50 text-2xl'> Ongoing</h1>
                    </div>
                    <div > 

                    </div>
                    
                </div>
                <div className=''>
                    <div className='bg-orange-700 py-5 pl-3 rounded-lg border-2 border-black'>
                        <h1 className='text-gray-50 text-2xl'>Completed</h1>
                    </div>
                   
                </div>
            </div>
        </DndProvider>
    );
};

export default UserDashboard;