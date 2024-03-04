import CreateProject from "../ProjectSection/CreateProject";
export default function ManagerProject({
  isAddproject,
  handleAddproject,
  handleSetProject,
}) {
  return (
    <>
      {isAddproject ? (
        <CreateProject
          handleSetProject={handleSetProject}
          handleAddproject={handleAddproject}
        />
      ) : (
        <div className="ManageProject">
          <img src="src/assets/no-projects.png" alt="no project selected" />
          <p>Select project or get started with a new one</p>
          <button onClick={handleAddproject}>Create new Project</button>
        </div>
      )}
    </>
  );
}
