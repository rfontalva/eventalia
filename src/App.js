import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Error from './views/Error';
import AppTitle from './components/AppTitle'
import UserContext from './context/UserContext';
import SignUp from './views/SignUp';
// import Footer from './components/Footer'

const App = () => {
  const [key, setKey] = React.useState();
  const userDetails = { key, setKey };
  React.useEffect(() => {
    const key = 'key=';
    const search = document.cookie.search(key);
    if (search !== -1) {
      const startIndex = search + key.length;
      const end = document.cookie.slice(startIndex).search(';') + startIndex;
      setKey(document.cookie.slice(startIndex, end));
    }
  }, []);

  return (
    <div className="page-container">
      <UserContext.Provider value={userDetails}>
        <div className="content-wrap">
          <Router>
          <AppTitle /> 
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
    </div>
  );
};
export default App;
