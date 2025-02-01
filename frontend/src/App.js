import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import FaqList from "./components/FaqList";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const [lang, setLang] = useState("en"); 

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Router> 
      <div>
        <h1>FAQ System</h1>
          <select onChange={handleLanguageChange} value={lang}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>

        
        <Switch>
          <Route
            exact
            path="/"
            render={() => <FaqList lang={lang} />} 
          />
          <Route path="/admin" component={AdminPanel} /> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;
