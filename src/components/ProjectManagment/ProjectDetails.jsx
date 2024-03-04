import ProjectTask from "./projectTaks";
import { useRef,useState,useEffect } from "react";
export default function ProjectDetails({projects,projectIndex,handleDeleteProject}) {
    const inputValue = useRef("");
    const [tableTasks , setTableTasks] = useState(projects[projectIndex].tasks);
    useEffect(() => {
      setTableTasks(projects[projectIndex].tasks);
    }, [projects, projectIndex]);
    function handleInputValue()
    {
        if(inputValue.current.value == '')
            return;
        const value = inputValue.current.value;
        setTableTasks((current)=>{
          tableTasks;
           const newTable = [value,...current];
           projects[projectIndex].tasks = newTable;
           return newTable;
        });
        inputValue.current.value= "";
    }
    function handleClear(index){
        setTableTasks((current)=>{
            const newTable = [...current ];
            newTable.splice(index,1);
            projects[projectIndex].tasks = newTable;
            return newTable;
        });
    }
  return (
    <div className="ProjectDetails">
      <div id="project-info">
        <h1>{projects[projectIndex].title}</h1>
        <button onClick={handleDeleteProject}>Delete</button>
      </div>
      <p className="text-gray-500 text-sm mb-2">{projects[projectIndex].date}</p>
      <pre className="text-sm  mb-2 border-b-2  p-2  description">{projects[projectIndex].description}</pre>
      <h1>Tasks</h1>
      <div className="Input-filed">
        <input  ref={inputValue} type="text" />
        <button onClick={handleInputValue}>Add Task</button>
      </div>
        <ul  className="tasks">
            {projects[projectIndex].tasks.map((item,indexof)=><ProjectTask task={item} index={indexof} handleClear={handleClear}/>)}
        </ul>
    </div>
  );
}
