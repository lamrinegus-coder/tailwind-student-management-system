import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/students"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Students
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Courses
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Settings
      </NavLink>
    </nav>
  );
}

export default Navbar;
