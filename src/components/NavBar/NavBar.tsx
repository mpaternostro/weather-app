import { SearchIcon } from "components/SearchIcon/SearchIcon";
import { StyledNavBar } from "components/NavBar/StyledNavBar";
import { Link } from "react-router-dom";

export function NavBar(): JSX.Element {
  return (
    <StyledNavBar>
      <nav>
        <ul>
          <li>
            <Link to="/">Weather App</Link>
          </li>
          <li>
            <SearchIcon />
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
    </StyledNavBar>
  );
}
