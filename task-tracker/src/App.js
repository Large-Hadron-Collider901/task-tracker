
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
    const [showAddTask, setShowAddTask] =useState(false)
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Abrams Vet Appointment',
        day: '9/20/21 at 10:30 am',
        reminder: true,
        },
        {
            id: 2,
            text: 'Grocery Shopping',
            day: '9/21/21 at 11:00 am',
            reminder: false,
            },
            
            {
                id: 3,
                text: 'JavaScript Test',
                day: '11/20/21 at 10:30 am',
                reminder: true,
                }

        ])

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
const newTask = { id, ...task }
setTasks([ ...tasks, newTask ])
}


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
    id))
  }
// Toggle Reminder

const toggleReminder = (id) => {
setTasks(
  tasks.map((task) => 
    task.id === id ? { ...task, reminder:
      !task.reminder } : task
    )
  )
}



 
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    ) : (
       "No tasks to show"
    )}
    </div>
  );
}

export default App;
