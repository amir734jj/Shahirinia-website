import Header from "./components/Header";
import Home from "./components/Home";
import CV from "./components/CV";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container style={{ marginTop: "2rem" }}>
          <Switch>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
