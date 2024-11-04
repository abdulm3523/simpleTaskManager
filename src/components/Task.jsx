import { useState } from "react"

export default function ({ task,onTaskChange,onDelete }) {
 
    const [isEdit,setIsEdit]=useState(false)

    let taskContent=''

    if (isEdit) {
        taskContent = (<>
            <input value={task.text} onChange={(e) => {
                onTaskChange({
                    ...task,
                    text:e.target.value
                    
               }) 
            }}/> <button onClick={()=>setIsEdit(false)}>Save</button>
        </>)
    } else {
        taskContent = (
            <>
            {task.text}
        <button onClick={()=>setIsEdit(true)}>Edit</button></>
        )
    }

    return (
        <li>
            <input type="checkbox" checked={task.status} onChange={(e) => onTaskChange({
                ...task,
                status:e.target.checked
            })} />
            {taskContent}
            <button onClick={()=>onDelete(task.id)}>Delete</button>
        </li>
    )
}