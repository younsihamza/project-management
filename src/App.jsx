import ProjectSection from "./components/ProjectSection/ProjectSection";
import ManageProject from "./components/ProjectManagment/ManageProject";
import ProjectDetails from "./components/ProjectManagment/ProjectDetails";
import { useState } from "react";
function App() {
  const [project, setProject] = useState([]);
  const [addProject, setAddproject] = useState(false);
  const [projectSelected, setProjectSelected] = useState(0);
  const [isProjectDetailes, setProjectDetailes] = useState(false);
  function handleSetProject(newproject) {
    setProject((current) => [...current, newproject]);
  }
  function handleProjectSelected(index) {
    setProjectSelected(index);
    setProjectDetailes(true);
    setProject((current=>[...current]))
  }
  function handleAddproject() {
    setAddproject((current) => !current);
  }
  function handleDeleteProject(index) {
    setProject((current) => {
      const newTable = [...current];
      newTable.splice(index,1);
      return newTable;
    });
    setProjectDetailes(false);

  }
  return (
    <>
      <ProjectSection 
        handleAddproject={handleAddproject}
        addProject={addProject}
        project={project}
        handleProjectSelected={handleProjectSelected}
        projectSelected={projectSelected}
      />
      {(isProjectDetailes  &&  !addProject) ? (
        <ProjectDetails
          projects={project}
          projectIndex={projectSelected}
          handleDeleteProject={handleDeleteProject}
        />
      ) : (
        <ManageProject
          handleSetProject={handleSetProject}
          isAddproject={addProject}
          handleAddproject={handleAddproject}
        />
      )}
    </>
  );
}

export default App;
