import { useRef } from "react";
export default function CreateProject({ handleSetProject, handleAddproject }) {
  const inputTitle = useRef();
  const inputDescription = useRef();
  const inputDate = useRef();

  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  function handleClickSave() {
    const dataProject = {};
    dataProject.title = inputTitle.current.value;
    dataProject.description = inputDescription.current.value;
    dataProject.date = inputDate.current.value;
    dataProject.tasks = [];
    if (
      dataProject.title == "" ||
      dataProject.description == "" ||
      dataProject.date == ""
    )
    return;
    dataProject.date = formatDate(inputDate.current.value)
    inputTitle.current.value = "";
    inputDescription.current.value = "";
    inputDate.current.value = "";
    handleSetProject(dataProject);
    handleAddproject();
  }
  return (
    <div className="CreateProject">
      <div>
        <button onClick={handleAddproject}>Cancel</button>
        <button onClick={handleClickSave} id="save">
          Save
        </button>
      </div>
      <label>Title</label>
      <input ref={inputTitle} required />
      <label>description</label>
      <textarea ref={inputDescription} className="description" required/>
      <label>due date</label>
      <input ref={inputDate} type="date" required/>
    </div>
  );
}
