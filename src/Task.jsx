import { useState } from "react"

export default function Task({ task }) {
  const { title, done } = task
  const [isDone, setDone] = useState(done)
  const toggle = () => {
    setDone((prev) => !prev)
  }
  return (
    <div className={`task ${isDone ? "done" : ""}`} onClick={toggle}>
      <input
        type="checkbox"
        checked={isDone}
        id={title}
        name={title}
        className="taskCheckbox"
      />
      <label
        htmlFor={title}
        onClick={(e) => e.preventDefault()}
        className="taskLabel"
      >
        {title}
      </label>
    </div>
  )
}
