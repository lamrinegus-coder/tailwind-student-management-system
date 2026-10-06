import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/students", label: "Students" },
    { to: "/courses", label: "Courses" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <nav className="mb-7 flex flex-wrap gap-3">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `rounded-xl border px-5 py-2.5 font-semibold no-underline transition ${
              isActive
                ? "border-transparent bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                : "border-white/10 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
