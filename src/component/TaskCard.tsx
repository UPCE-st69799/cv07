import {Task} from "../data/init-data";


interface Props{
    task: Task,
    onTaskDone: (task: Task) => void

}

const TaskCard = ({task,onTaskDone}:Props) => {
    const doneClickHandle = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("asd");
        task.done = e.target.checked;
        onTaskDone(task);
        console.table(task);
    }
    return <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.creationDate.toISOString()}</p>
        <p>{task.updateDate?.toISOString()}</p>
        <br/>
        <input type="checkbox" checked={task.done} name="done" onChange={doneClickHandle}/>
    </div>
};

export default TaskCard;