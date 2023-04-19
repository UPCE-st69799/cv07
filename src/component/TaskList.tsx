import React, {useState} from "react";
import {Task} from "../data/init-data";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Array<Task>
}

const TaskList = ({tasks} : Props) => {
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

export default TaskList;