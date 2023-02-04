import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home page</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
