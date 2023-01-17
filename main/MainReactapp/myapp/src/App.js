


import './App.css';


// import Page from './Day16Task/Page';
// import Userlist from './Day16Task2/Userlist';
// import Form from './Day16Form/Form';
// import Postlist from './Day16PostTask/Postlist';
// import FormPage from './Day17Form/FormPage';
// import ShowHide from './Day17Board/ShowHide';
// import FireReg from './Day17FireBase/FireReg';
// import Carlist from './Day18SortTask/Carlist';
// import Effect from './Day19ConditionalRendering/Effect';
// import Example from './Day19ConditionalRendering/Example';
// import UserPostsMainPage from './Day19Task/UserPostsMainPage';
// import PortfolioMain from './Portfolio/PortfolioMain';
// import MainDisplay from './Day19FakeStore/MainDisplay';
// import Order from './Day20OrderTask/Order';
// import Comp1 from './Day20ComponentDrilling/Comp1';

// import Main from './Day20Context/Main';
import { Route, Routes } from 'react-router-dom';
//-------------RouterDOM-----------------
// import About from './Day20ReactRouterDom/About';
// import Home from './Day20ReactRouterDom/Home';
// import Products from './Day20ReactRouterDom/Products';
// import Nav from './Day20ReactRouterDom/Nav';
// import ProductMen from './Day20ReactRouterDom/ProductMen';
// import ProductWoman from './Day20ReactRouterDom/ProductWoman';
//--------------------------------------------------------
import Day20Nav from './Day20HomeTaskRouterDom/Day20Nav';
import Table from './Day20HomeTaskRouterDom/Table';
import Add from './Day20HomeTaskRouterDom/Add';

function App() {
  return (
    <div className="App">
      
      <Day20Nav/>
      <Routes>
        <Route path='/' element={<Table/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>



      {/* <Home/> */}
      {/* <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}>
          <Route path='productmen' element={<ProductMen/>}/>
          <Route path='productwoman' element={<ProductWoman/>}/>
        </Route>
      </Routes> */}

      
      {/* <Page/> */}
      {/* <Userlist/> */}
      {/* <Form/> */}
      {/* <Postlist/> */}
      {/* <ShowHide/> */}
      {/* <FormPage/> */}
      {/* <FireReg/> */}
      {/* <Carlist/> */}
      {/* <PortfolioMain/> */}
      {/* <UserPostsMainPage/> */}
      {/* <Example/> */}
      {/* <Effect/> */}
      {/* <MainDisplay/> */}
      {/* <Order/> */}
      {/* <Comp1/> */}
      {/* <Main/> */}
      
      
      
    </div>
  );
}

export default App;
