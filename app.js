// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StudentSection from './components/StudentSection';
import ExpertSection from './components/ExpertSection';
import UploadNotes from './components/UploadNotes';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/student" component={StudentSection} />
          <Route path="/expert" component={ExpertSection} />
          <Route path="/upload" component={UploadNotes} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
