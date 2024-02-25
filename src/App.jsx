import { useState } from "react"
import "./App.css"
import ListCard from "./ListCard"
import lists from "./lists.json"
import Task from "./Task"

function App() {
  const [currentList, setCurrentList] = useState({})
  return (
    <div className="homePage">
      <h1 className="headline">ליסטאסק</h1>
      <div className="cardList">
        {lists.map((list) => {
          return (
            <ListCard
              key={list.title + "key"}
              list={list}
              setCurrentList={setCurrentList}
            />
          )
        })}
      </div>

      {currentList.tasks && (
        <div className="currentList">
          <h2 className="currentListTitle">{currentList.title}</h2>
          <div className="tasks">
            {currentList.tasks.map((task) => {
              return <Task task={task} key={task.title + "key"} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
