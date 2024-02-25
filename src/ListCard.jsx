export default function ListCard({ list, setCurrentList }) {
  const { title, tasks } = list
  return (
    <div className="card" onClick={() => setCurrentList(list)}>
      {title}
    </div>
  )
}
