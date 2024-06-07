import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary-subtle sticky-top top-0">
        <div className="container-fluid px-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ps-2" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/" ? "active bg-dark-subtle rounded" : ""}`} aria-current={location.pathname === "/" ? "page" : undefined} href="/">
                  Case 1
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/case2" ? "active bg-dark-subtle rounded" : ""}`} aria-current={location.pathname === "/case2" ? "page" : undefined} href="/case2">
                  Case 2
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === "/case3" ? "active bg-dark-subtle rounded" : ""}`} aria-current={location.pathname === "/case3" ? "page" : undefined} href="/case3">
                  Case 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
