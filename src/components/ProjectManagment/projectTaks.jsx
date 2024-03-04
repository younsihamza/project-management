export default function ProjectTask({ task, index, handleClear }) {
  return (
    <li>
      <p>{task}</p>
      <button onClick={() => handleClear(index)}>Clear</button>
    </li>
  );
}
