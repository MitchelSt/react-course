import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
}
