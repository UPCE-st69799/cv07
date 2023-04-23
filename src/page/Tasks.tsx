import TaskList from "../component/TaskList";
import './Tasks.css';
import {useAppSelector} from "../app/hooks";
import {useQuery} from "@tanstack/react-query";
import {Task, tasks} from "../data/init-data";
import React from "react";
import TaskForm from "../component/TaskForm";

const Tasks = () => {
    const isLoggedIn = useAppSelector((state) => state.login.value);

    const fetchData = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${backendUrl}/task`);

        return (await response.json()) as Array<Task>;
    };

    const { isLoading, data, isError, error } = useQuery(['tasks'], fetchData);

    if(isLoading) {
        return <div className="alert alert-danger">loading</div>
    }

    return <div className="tasks">
        {isError && <div className="alert alert-danger">{JSON.stringify(error)}</div>}
        {data && <TaskList tasks={data} />}

        <TaskForm />
    </div>
};

export default Tasks;