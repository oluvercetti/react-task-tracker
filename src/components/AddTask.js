import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] =  useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        if(!day){
            alert('Please add a date and time')
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="addTask">Add Task</label>
                <input type="text" id='addTask' placeholder='Add Task'
                 value={text}
                 onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="taskDate">Date & Time</label>
                <input type="datetime-local" id='taskDate' placeholder='Add Day and Time'
                 value={day}
                 onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="taskReminder">Set Reminder</label>
                <input type="checkbox" id='taskReminder'
                checked={reminder}
                 value={reminder}
                 onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <button type='submit' className='btn btn-block'> Save Task</button>
        </form>
    )
}

export default AddTask
