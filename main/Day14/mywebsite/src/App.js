
import './App.css';
import Logo from './Components/logo'
import Para from './Components/para'
import Anchor from './Components/anc'
// if we are not using export default then we have to use{}
//and keep the name same
import {Booklist} from './Components/booklist'
//import {Book} from './Components/book'

function App() {
  return (
    <div className="App">
      <Booklist></Booklist>
      {/* <header className="App-header">
        {/* <Logo></Logo>
        <Para></Para>
        <Anchor></Anchor> 
        <Booklist></Booklist>
      </header> */}
    </div>
  );
}
//components are always starts with capital letter
export default App;
