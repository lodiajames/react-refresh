
import Dictionary from './pages/Dictionary';
import Header from './components/Header';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import ErrorPage from './components/Errorpage';

function App() {


  return (
    <BrowserRouter>
       <Header>
        <Routes>
          <Route  exact path="/"  element={<Employees/>}/>
          <Route  path='/customers' element={<Customers/>}/>
          <Route  path='/definition/:search'  element={<Definition/>}/>
          <Route  path='/dictionary' element={<Dictionary/>}/>
          <Route  path='/404' element={<NotFound/>}/>
          <Route  path='*' element={<ErrorPage/>}/>
        </Routes>
       </Header>
        </BrowserRouter>
        
  )
}

export default App;
