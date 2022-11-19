import React from "react";
import Task from "./task.js";

const TaskList = (props) =>
{
  
  
    const active = props.tasks.filter(task =>
        
                task.active === true
              
        )

    const done = props.tasks.filter(task =>
        task.active === false)

        if(done >= 2)
        {
            done.sort((a,b) =>
            {
                 a.finishDate - b.finishDate
            })
    
        }

        if(active.length >= 2)
        {
            active.sort((a,b) =>
            {
                a = a.text.toLowerCase();
                b = b.text.toLowerCase();

                 if(a < b)
                    return -1;
                if(a > b)
                    return 1;
                return 0;
                
            })
    
        }
     
        
    const tasksActive = active.map(task => (<Task 
        key={task.id} 
        task={task}
        delete={props.delete}
        change={props.change}/>

    ))

    const tasksDone = done.map(task => (<Task 
        key={task.id} 
        task={task}
        delete={props.delete}
        change={props.change}/>

    ))

    return(
        <>
        <div className="active">
           <h2>Zadania do zrobienia </h2>
            {tasksActive.length < 1 ? <p>Nie masz nic do zrobienia.</p>
            :
            tasksActive}
        </div>

        <hr/>

        <div className="done">
            <h3>Zadania zrobione (<em>{tasksDone.length}</em>) <br/>
            {tasksDone.length > 2 && <span style={{fontSize: '16px', color: 'red'}}>Wyświetlone są jedynie 2 elementy</span>}
            </h3>
            
            {tasksDone.slice(0,2)}
        </div>
        </>
    )
}

export default TaskList;