import { QueryClient, QueryClientProvider } from "react-query";
import Userlist from "./Components/Userlist";
import "./App.css";
//import TasksList from "./TaskComponents/TasksList";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
           <Userlist />
           {/* <TasksList/> */}
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;