import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Fragment } from 'react';

import { Landing } from "./components/pages/Landing";
import { Dashboard } from './components/pages/Dashboard';
import {Loading} from './components/utils/Loading';

function App() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route exact path = "/" element={<Landing/>}/>
            <Route path = "/dashboard" element={<Dashboard/>}/>
            <Route path = "/loading" element={<Loading/>}/>
          </Routes>
        </Router>
      </Fragment>
    );
}

export default App;