import { NavBar } from "components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/forecast/:day" exact>
              {/* <FullDayForecast /> */}
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
