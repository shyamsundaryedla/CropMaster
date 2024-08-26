import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-3">
      <div className="container position-relative ">
        <a className="navbar-brand text-white">
          <i class="fa-brands fa-pagelines"></i>Crop Master
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse position-absolute end-0 "
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn" to="/Signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
