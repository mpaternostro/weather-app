import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Weather App</Link>
          </li>
          <li>
            <input
              name="search"
              type="search"
              placeholder="Search for a city"
            />
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
