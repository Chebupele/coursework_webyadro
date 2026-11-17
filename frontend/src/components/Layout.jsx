import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <Link className="brand" to="/" aria-label="Gadget Hub — главная">
            <span>Gadget</span> Hub
          </Link>
          <nav className="site-nav" aria-label="Основная навигация">
            <NavLink to="/catalog">Каталог</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/login">Войти</NavLink>
          </nav>
        </div>
      </header>
      <main className="container main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <span>Магазин надёжных гаджетов</span>
          <a href="tel:+78006783424">8 (800) 678-34-24</a>
        </div>
      </footer>
    </>
  );
}
