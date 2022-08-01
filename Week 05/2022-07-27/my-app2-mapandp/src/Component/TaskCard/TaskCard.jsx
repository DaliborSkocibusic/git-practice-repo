import React from "react";
import styles from "./TaskCard.Module.scss";

const TaskCard = ({ taskName, priority, deleteTask, stateArr }) => {
    const handleDelete = () => {
        const updatedArr = stateArr.filter((task) => {
            return task.task !== { taskName };
        });

        deleteTask(updatedArr);
    };
    return (
        <div className={styles.TaskCard}>
            <h3>Name: {taskName}</h3>
            <p>Priority: {priority}</p>
            <button onClick={handleDelete}>Delete Task</button>
        </div>
    );
};

export default TaskCard;