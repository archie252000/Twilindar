import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Fragment } from 'react';

import {Landing} from "./components/pages/Landing";
import { Dashboard } from './components/pages/Dashboard';

function App() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route exact path = "/" element={<Landing/>}/>
            <Route path = "/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Router>
      </Fragment>
    );
}

export default App;