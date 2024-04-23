import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="fa-solid fa-house-chimney nav-link"></Link>
          <div className="flex items-center gap-2">
            <Link to="/login" className="fa-solid fa-arrow-right-to-bracket nav-link"></Link>
            <Link to="/register" className="fa-solid fa-user-plus nav-link"></Link>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
