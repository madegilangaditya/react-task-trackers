import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: 'true',
    },
    {
        id:2,
        text:'Meeting',
        day: 'Feb 6th at 2:30pm',
        reminder: 'true',
    },
    {
        id:3,
        text:'Shopping',
        day: 'Feb 7th at 2:30pm',
        reminder: 'false',
    }
  ])
  // Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks Found'}
    </div>
  )
}

// Using class
// class App extends React.Component{
//   render() {
//     return <h1>Hello From class</h1>
//   }
// }

export default App;
