import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Tasklist from './Components/Tasklist';

const queryClient = new QueryClient(); 
function App() {
  return (
      <QueryClientProvider client={queryClient}>
      <div className="App">
        <Tasklist/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
