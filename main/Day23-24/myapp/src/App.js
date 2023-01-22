import { QueryClient, QueryClientProvider } from "react-query";
import Userlist from "./Components/Userlist";
import "./App.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Userlist />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;