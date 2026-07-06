import { useState } from "react";

function ToDoList(){
    const [tasks, setTask] = useState(["Toilet","Suck"])
    const [newTask, setNewtask] = useState("")

    function handelTaskOnchange(event){
        setNewtask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(tasks => [...tasks,newTask]);
            setNewtask(""); 
        }
    }
    function removeTask(index){
        const removeTask = tasks.filter((element,i) => i !== index);
        setTask(removeTask);
    }
    function moveTaskUp(index){
        
        if(index > 0){
            const upDateNewTask = [...tasks];
            [upDateNewTask[index-1],upDateNewTask[index]] =[upDateNewTask[index], upDateNewTask[index-1]];
            setTask(upDateNewTask);
        }

    }
    function moveTaskDown(index){
            if(index < tasks.length -1){
                const upDateNewTask = [...tasks];
                [upDateNewTask[index+1],upDateNewTask[index]] = [upDateNewTask[index],upDateNewTask[index+1]];
                setTask(upDateNewTask);
            }
    }
    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
            <input type="text" value={newTask} placeholder="Create a new Task" onChange={handelTaskOnchange}/>
            <button onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index)=> (
                    <li key={index}>
                        <span>{task}</span>
                        <button className="delete-button" onClick={()=>removeTask(index)}>Delete</button>

                        <button className="move-up-button" onClick={()=> moveTaskUp(index)}>Up</button>
                        <button className="move-down-button" onClick={()=>moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default ToDoList;