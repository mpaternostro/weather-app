import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Weather App</h1>
          <ul>
            <li>Select city</li>
            <li>About</li>
            <li>Settings</li>
          </ul>
        </header>
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
