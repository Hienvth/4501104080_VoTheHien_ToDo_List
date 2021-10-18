import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom' ;
import {MenuNgang} from './components/MenuNgang';
import {routes} from './config/routes';
import {MyRoute} from './components/MyRoute';
import { TodoContextProvider } from './context/TodoContext';

function App() {
  return (
    
    <div className="App">
        {/* <h2>My App</h2>*/}
        <div style={{ backgroundColor: '#350048' , height: '30px' } }></div>
        <TodoContextProvider>
          <BrowserRouter>
            {/* <!-- Menu ngang --> */}
            <MenuNgang />
            {/* Định tuyến */}
            <Switch >
              {routes.map((item, index) => {
                return (
                  <MyRoute key={index} path={item.path} component={item.component} />
                )
              })}
            </Switch>
          </BrowserRouter>
        </TodoContextProvider>
    </div>
  );
}

export default App;
