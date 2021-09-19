import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
const App = () => {
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


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
    id))
  }
  return (
    <div className="container">
     <Header />
    <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
