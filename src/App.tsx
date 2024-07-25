
import { NavLink } from "react-router-dom";


function App() {
  return (
    <>
      
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/login"><button>login</button></NavLink>
              <NavLink to="/register"><button>register</button></NavLink>
              <NavLink to="/services"><button>Services</button></NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
