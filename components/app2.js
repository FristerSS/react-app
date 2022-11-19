import React from "react";
import './app2.css'
import AddTask from './addTask.js'
import TaskList from './taskList.js'

class App extends React.Component
{
    counter = 4;

    state = {
        tasks: [
            {
                id: 0,
                text: 'cos zrobic',
                date: '2022-12-01',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: 'cos zrobic 2 ',
                date: '2022-12-02',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: 'cos zrobic 3',
                date: '2022-12-03',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: 'cos zrobic 4',
                date: '2022-12-04',
                important: true,
                active: true,
                finishDate: null
            },
        ]
    }
 
    deleteTask = (id) =>
    {
        console.log('delete elementu o id: ' + id)
        const tasks = [...this.state.tasks]
        const index = tasks.findIndex(task => id === task.id)
        tasks.splice(index, 1)
        console.log(index)
        this.setState(
        {
            tasks
        })
    }

    changeTaskStatus = (id) =>
    {
        const tasks = Array.from(this.state.tasks);
        console.log('change w stanie elementu o id' + id)
        tasks.forEach(task =>
            {
                if(task.id === id)
                {
                    task.active = false;
                    task.finishDate = new Date().getTime();
                }
            })

            this.setState({
                tasks
            })
    }

    addTask = (text, date, important) =>
    {
        console.log('dodano obiekt');
        const Task ={
            id: this.counter,
            text: text, // tekst z inputa
            date: date, // tekst z inputa
            important: important, // wartosc z inputa
            active: true,
            finishDate: null
        }
        this.counter++;

        const tasks = [...this.state.tasks];
        tasks.push(Task);

        this.setState({
            tasks
        })

        return true;
    }


    render()
    {
        return(
            <div className='App'>
                TODO App
                <AddTask
                addTask={this.addTask}/>
                <TaskList 
                tasks={this.state.tasks}
                delete={this.deleteTask}
                change={this.changeTaskStatus}
                />
            </div>
        )
    }

}

export default App;
