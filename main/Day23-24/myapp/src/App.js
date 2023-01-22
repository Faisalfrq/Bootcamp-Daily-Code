import './App.css';
import { QueryClientProvider,QueryClient } from 'react-query';
import Userlist from './Components/Userlist';

const queryClient = new QueryClient()
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     

        <Userlist/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
