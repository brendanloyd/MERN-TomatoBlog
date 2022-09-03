import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = 'MrTomatoMan';
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single id={window.location.href.split('/').pop()}/>
        </Route>
        <Route path="/write">
          <Write userName={currentUser}/>
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
