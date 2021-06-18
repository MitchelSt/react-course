import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chart from "./pages/Chart/Chart";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/chart" component={Chart} />
      </Router>
    </>
  );
}
