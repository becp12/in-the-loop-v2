import './NavBar.css'

export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <a href="/"><img src="/images/banner.png" id="banner-img" alt="In The Loop Banner"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {  // eslint-disable-next-line
}              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
            {  // eslint-disable-next-line
}              <a className="nav-link" href="#">Yarn Stash</a>
            </li>
            <li className="nav-item">
            {  // eslint-disable-next-line
}              <a className="nav-link" href="#">Pattern Library</a>
            </li>
            <li className="nav-item">
            {  // eslint-disable-next-line
}              <a className="nav-link" href="#">Stitch Library</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Enter keyword" aria-label="Search" />
              <button className="btn btn-outline-success bg-success-subtle" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}