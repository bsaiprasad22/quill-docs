import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidv4()}`} />
        </Route>
        <Route exact path="/documents/:id" component={TextEditor} />
      </Switch>
    </Router>
  );
}

export default App;
