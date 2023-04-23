import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Task} from "../data/init-data";
import TaskCard from "../component/TaskCard";

const TaskDetail = () => {
    const {id} = useParams<'id'>();
    const [data, setData] = useState<Task | null | undefined>();
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const result = await fetch(`${backendUrl}/task/${id}`);

        if(result.ok) {
            const parsed = await result.json() as Task;

            setData({...parsed, done: false});
        } else {
            setError(await result.json());
        }
    };

    const taskDoneHandle = (task : Task) => {
        setData({...task})
    };

    return <>
        {error}
        {data && <TaskCard task={data} onTaskDone={taskDoneHandle} />}
    </>
}

export default TaskDetail;