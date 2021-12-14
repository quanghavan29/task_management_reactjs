import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import ToDoListRCC from './pages/ToDoList/ToDoListRCC';
import ToDoListRFC from './pages/ToDoList/ToDoListRFC';
import SagaToDoList from './pages/SagaToDoList/SagaToDoList';
import Loading from './components/GlobalSetting/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Loading />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/todolist-rcc' component={ToDoListRCC} />
        <Route exact path='/todolist-rfc' component={ToDoListRFC} />
        <Route exact path='/todolist-saga' component={SagaToDoList} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
