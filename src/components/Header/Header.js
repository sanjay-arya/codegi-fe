import './Header.css'

export default function Header() {
  return (
    <header className="navBar">
      <div className="navBar-header">
        <img className="navBar-logo" src="https://www.codigo.co/img/ui/logo-codigo-red.svg" width="145" height="19" alt=""/>
          <section className="navBar-menu">
            <a className="navBar-item active">Work</a>
            <a className="navBar-item">Solutions</a>
            <a className="navBar-item">Services</a>
            <a className="navBar-item">About us</a>
            <a className="navBar-item">Blog</a>
            <span className="navBar-button">
                Request a quote
            </span>
          </section>
      </div>
    </header>
  )
}
