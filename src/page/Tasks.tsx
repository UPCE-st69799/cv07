import TaskCard from "../component/TaskCard";
import {Task, tasks} from "../data/init-data";
import {useState} from "react";

const Tasks = () => {

    const[taskList, setTaskList] = useState<Array<Task>>(tasks);

    const taskDoneHandle = (task : Task) => {
        console.log("Changing state of reactive variable");

        setTaskList([ ...taskList] );
    }

    return <div>
        <h1>Aktuální tasky</h1>
        {taskList.filter(t => !t.done).map(t =>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}

        <h1>Splněné tasky</h1>
        {taskList.filter(t => t.done).map(t =>
            <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>
        )}
    </div>
}

export default Tasks;