import './NavBar.css'

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <img src="/images/banner.png" id="banner-img" alt="In The Loop Banner Image"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Yarn Stash</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" hred="#">Pattern Library</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" hred="#">Stitch Library</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success bg-success-subtle" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}