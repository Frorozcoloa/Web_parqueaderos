
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Park from './components/park'
import Factura from './components/factura'


function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={()=> <Park/>}/>
          <Route path="/factura/:id" component={Factura} />
        </Switch>
      </Router>
    </Container>
   
  );
}

export default App;
