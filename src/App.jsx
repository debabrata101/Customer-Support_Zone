import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Navber from './Component/Navbar/Navber'
import TicketList from './Component/TicketList/TicketList'
import TaskStatus from './TaskStatus/TaskStatus'
import useTicket from './useTicket/useTicket'

function App() {
  const { tickets, tasks, resolved, addTask, completeTask } = useTicket();
  console.log(tickets)

  return (
    <>
      <Navber></Navber>
      <Banner
      inProgress ={tasks.length}
      resolved = {resolved.length}
      ></Banner>

      <div className='max-w-[1200px] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className="lg:col-span-2">
          <TicketList tickets={tickets}
           addTask={addTask}
          />
        </div>
        <TaskStatus
        tasks={tasks}
        resolved={resolved}
        completeTask={completeTask}
        ></TaskStatus>
      </div>




      <Footer></Footer>
    </>
  )
}

export default App
