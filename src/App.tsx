import { Header } from "./components/Header/Header"
import { TaskContainer } from "./components/Tasks/TaskContainer";


import "./global.css";

function App() {

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <TaskContainer />
    </div>
    
  )
}

export default App
