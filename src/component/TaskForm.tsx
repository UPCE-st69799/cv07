
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

const resolver = yupResolver(yup.object({
    "title" : yup.string()
        .max(128, "Maximálně 128 znaků.")
        .required("Toto je povinné pole.")
}));

interface FormValues {
    title: string
}

const TaskForm = () => {
    const { register, handleSubmit, formState : {errors} } = useForm<FormValues>({resolver})

    const submitHandle = ( data: FormValues ) => {
        console.table(data);
    }

    // Handle submit kontroluje a pokud je v pořádku aktivuje submit handle
    return <>
        <h1>Nový task</h1>
        <form onSubmit={handleSubmit(submitHandle)}>
            <input {...register("title")}/>
            {errors.title && <p>{errors.title.message}</p>}
            <button type="submit">Odeslat</button>
        </form>
    </>
}

export default TaskForm;