import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center  gap-2 ${
                task.isCompleted && "line-through bg-slate-500"
              }`}
            >
              {task.isCompleted && <CheckIcon/>}
              {task.title}
            </button>


            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
