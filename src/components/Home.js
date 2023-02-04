import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/"> Home page {"/"}</NavLink>
          <Breadcrumbs />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Home;
