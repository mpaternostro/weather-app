import { NavBar } from "components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Homepage } from "./pages/Homepage/Homepage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
  input {
    font-family: 'Poppins', sans-serif;
  }
`;

function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />
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
