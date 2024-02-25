export default function ListCard({ list, setCurrentList, currentList }) {
  const { title, tasks } = list
  return (
    <div
      className={`card ${currentList.title === title ? "activeCard" : ""}`}
      onClick={() => setCurrentList(list)}
    >
      {title}
    </div>
  )
}
