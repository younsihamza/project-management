export default function ProjectSection({
  addProject,
  handleAddproject,
  project,
  handleProjectSelected,
  projectSelected
}) {
  return (
    <div className="ProjectSection">
      <h1>YOUR PROJECTS</h1>
      <button
        id="addProject"
        onClick={addProject ? undefined : handleAddproject}
      >
        + Add Project
      </button>
      <ul>
        {project.map((item, indexof) => (
          <li>
            <button onClick={() => handleProjectSelected(indexof)} className={projectSelected == indexof ? "Active" : undefined}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
